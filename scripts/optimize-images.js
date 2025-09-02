#!/usr/bin/env node

/**
 * 图片优化脚本
 * 用于压缩和优化项目中的图片文件
 * 
 * 使用方法：
 * npm install sharp
 * node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 图片目录
const IMAGE_DIR = path.join(__dirname, '../static/img');
const OUTPUT_DIR = path.join(__dirname, '../static/img/optimized');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 支持的图片格式
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// 优化配置
const OPTIMIZATION_CONFIG = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    compressionLevel: 9
  },
  webp: {
    quality: 80
  }
};

/**
 * 获取文件大小（MB）
 */
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

/**
 * 优化单个图片
 */
async function optimizeImage(inputPath, outputPath, format) {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = getFileSize(inputPath);
    
    let optimizedBuffer;
    
    switch (format) {
      case '.jpg':
      case '.jpeg':
        optimizedBuffer = await sharp(inputBuffer)
          .jpeg(OPTIMIZATION_CONFIG.jpeg)
          .toBuffer();
        break;
      case '.png':
        optimizedBuffer = await sharp(inputBuffer)
          .png(OPTIMIZATION_CONFIG.png)
          .toBuffer();
        break;
      case '.webp':
        optimizedBuffer = await sharp(inputBuffer)
          .webp(OPTIMIZATION_CONFIG.webp)
          .toBuffer();
        break;
      default:
        console.log(`跳过不支持的文件格式: ${inputPath}`);
        return;
    }
    
    fs.writeFileSync(outputPath, optimizedBuffer);
    const optimizedSize = getFileSize(outputPath);
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${optimizedSize}MB (减少 ${reduction}%)`);
    
  } catch (error) {
    console.error(`❌ 优化失败 ${inputPath}:`, error.message);
  }
}

/**
 * 处理目录中的所有图片
 */
async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      await processDirectory(filePath);
    } else {
      // 处理文件
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        const relativePath = path.relative(IMAGE_DIR, filePath);
        const outputPath = path.join(OUTPUT_DIR, relativePath);
        
        // 确保输出目录存在
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        await optimizeImage(filePath, outputPath, ext);
      }
    }
  }
}

/**
 * 生成WebP版本
 */
async function generateWebPVersions() {
  const files = fs.readdirSync(IMAGE_DIR);
  
  for (const file of files) {
    const filePath = path.join(IMAGE_DIR, file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const nameWithoutExt = path.basename(file, ext);
      const webpPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
      
      try {
        const inputBuffer = fs.readFileSync(filePath);
        const webpBuffer = await sharp(inputBuffer)
          .webp(OPTIMIZATION_CONFIG.webp)
          .toBuffer();
        
        fs.writeFileSync(webpPath, webpBuffer);
        const originalSize = getFileSize(filePath);
        const webpSize = getFileSize(webpPath);
        const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`🔄 ${nameWithoutExt}.webp: ${originalSize}MB → ${webpSize}MB (减少 ${reduction}%)`);
        
      } catch (error) {
        console.error(`❌ WebP转换失败 ${file}:`, error.message);
      }
    }
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始优化图片...\n');
  
  try {
    // 优化现有图片
    await processDirectory(IMAGE_DIR);
    
    console.log('\n🔄 生成WebP版本...\n');
    
    // 生成WebP版本
    await generateWebPVersions();
    
    console.log('\n✅ 图片优化完成！');
    console.log(`📁 优化后的图片保存在: ${OUTPUT_DIR}`);
    console.log('\n💡 建议:');
    console.log('1. 检查优化后的图片质量');
    console.log('2. 如果满意，可以替换原图片');
    console.log('3. 考虑使用WebP格式以获得更好的压缩效果');
    
  } catch (error) {
    console.error('❌ 优化过程中出现错误:', error);
  }
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processDirectory, generateWebPVersions };
