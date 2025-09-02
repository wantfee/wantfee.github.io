# 图片优化指南

## 问题描述

项目中的作品图片文件较大，导致页面加载缓慢：
- floenvy-mobile-feature.png: 4.4MB
- floenvy.jpg: 3.2MB
- floenvy-product-page.png: 2.5MB
- boxzooka-icons-2.png: 2.5MB
- moreorless.png: 2.2MB
- boxzooka-icons-1.png: 1.8MB

## 已实施的优化方案

### 1. 懒加载 (Lazy Loading)
- 使用 `loading="lazy"` 属性
- 图片只在进入视口时才开始加载
- 减少初始页面加载时间

### 2. 渐进式加载 (Progressive Loading)
- 显示加载占位符
- 图片加载完成后平滑淡入
- 提供更好的用户体验

### 3. 加载状态指示器
- 旋转的加载图标
- "Loading image..." 文字提示
- 让用户知道图片正在加载

### 4. 图片容器优化
- 固定最小高度避免布局跳动
- 灰色背景作为占位符
- 圆角边框保持视觉一致性

## 进一步优化建议

### 1. 图片压缩
使用提供的优化脚本压缩图片：

```bash
# 安装依赖
npm install sharp

# 运行优化脚本
node scripts/optimize-images.js
```

### 2. 使用WebP格式
WebP格式比PNG/JPEG小30-50%：

```bash
# 生成WebP版本
node scripts/optimize-images.js
```

### 3. 响应式图片
为不同屏幕尺寸提供不同大小的图片：

```html
<picture>
  <source srcset="image-small.webp" media="(max-width: 768px)">
  <source srcset="image-medium.webp" media="(max-width: 1200px)">
  <img src="image-large.webp" alt="Description">
</picture>
```

### 4. CDN加速
- 使用CDN服务加速图片加载
- 利用浏览器缓存
- 减少服务器负载

### 5. 图片预加载
对于重要的图片，可以预加载：

```html
<link rel="preload" as="image" href="important-image.webp">
```

## 技术实现细节

### 懒加载实现
```jsx
<img 
  src={imageSrc}
  loading="lazy"
  alt="Description"
/>
```

### 渐进式加载实现
```jsx
const [imageLoaded, setImageLoaded] = useState(false);

<img 
  src={imageSrc}
  style={{
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 0.3s ease"
  }}
  onLoad={() => setImageLoaded(true)}
  alt="Description"
/>
```

### 加载状态实现
```jsx
{!imageLoaded && (
  <div className="imagePlaceholder">
    <LoadingOutlined className="loadingIcon" />
    <p>Loading image...</p>
  </div>
)}
```

## 性能监控

### 使用Lighthouse测试
```bash
# 安装Lighthouse
npm install -g lighthouse

# 测试性能
lighthouse https://your-site.com --output html --output-path ./lighthouse-report.html
```

### 关键指标
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 最佳实践

1. **图片格式选择**
   - 照片：WebP > JPEG
   - 图标/图形：WebP > PNG > SVG
   - 动画：GIF > WebP

2. **图片尺寸**
   - 根据实际显示尺寸调整
   - 避免过大的图片文件
   - 考虑设备像素比

3. **压缩质量**
   - 照片：80-85%
   - 图标：90-95%
   - 在质量和文件大小间平衡

4. **缓存策略**
   - 设置合适的缓存头
   - 使用版本号或哈希值
   - 考虑长期缓存

## 工具推荐

- **Sharp**: Node.js图片处理库
- **TinyPNG**: 在线图片压缩
- **Squoosh**: Google图片压缩工具
- **ImageOptim**: macOS图片优化工具

## 监控和维护

1. 定期检查图片文件大小
2. 监控页面加载性能
3. 更新过大的图片
4. 测试不同网络环境下的表现
