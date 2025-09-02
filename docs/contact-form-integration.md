# 联系表单集成指南

## 当前状态

联系表单功能已经完成，包括：
- ✅ 美观的表单界面
- ✅ 完整的表单验证
- ✅ 响应式设计
- ✅ 动画效果
- ✅ 模拟邮件发送

## 集成真实邮件服务

### 方案1：Formspree (推荐)

1. **注册Formspree账户**
   - 访问 https://formspree.io
   - 注册免费账户

2. **创建表单**
   - 创建新的表单
   - 获取表单ID

3. **更新代码**
   ```typescript
   // 在 src/utils/emailService.ts 中替换 sendContactEmail 函数
   export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
     try {
       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           name: formData.name,
           email: formData.email,
           company: formData.company,
           projectType: formData.projectType,
           budget: formData.budget,
           timeline: formData.timeline,
           description: formData.description,
           subject: `新的项目咨询 - ${formData.projectType}`,
         }),
       });
       
       if (!response.ok) {
         throw new Error('邮件发送失败');
       }
       
       return true;
     } catch (error) {
       console.error('邮件发送失败:', error);
       return false;
     }
   };
   ```

### 方案2：Netlify Forms

1. **部署到Netlify**
   - 将项目部署到Netlify
   - Netlify会自动检测表单

2. **添加表单属性**
   ```jsx
   <Form
     form={form}
     layout="vertical"
     onFinish={handleSubmit}
     className={classes.contactForm}
     data-netlify="true"
     name="contact"
   >
   ```

3. **更新邮件服务**
   ```typescript
   export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
     try {
       const response = await fetch('/', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: new URLSearchParams({
           'form-name': 'contact',
           name: formData.name,
           email: formData.email,
           company: formData.company,
           projectType: formData.projectType,
           budget: formData.budget,
           timeline: formData.timeline,
           description: formData.description,
         }),
       });
       
       return response.ok;
     } catch (error) {
       console.error('邮件发送失败:', error);
       return false;
     }
   };
   ```

### 方案3：EmailJS

1. **注册EmailJS**
   - 访问 https://www.emailjs.com
   - 注册账户并配置邮件模板

2. **安装依赖**
   ```bash
   npm install emailjs-com
   ```

3. **更新代码**
   ```typescript
   import emailjs from 'emailjs-com';
   
   export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
     try {
       const result = await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           name: formData.name,
           email: formData.email,
           company: formData.company,
           projectType: formData.projectType,
           budget: formData.budget,
           timeline: formData.timeline,
           description: formData.description,
         },
         'YOUR_USER_ID'
       );
       
       return result.status === 200;
     } catch (error) {
       console.error('邮件发送失败:', error);
       return false;
     }
   };
   ```

### 方案4：自定义后端API

1. **创建后端API**
   ```javascript
   // 示例：Node.js + Express + Nodemailer
   const express = require('express');
   const nodemailer = require('nodemailer');
   
   app.post('/api/contact', async (req, res) => {
     try {
       const transporter = nodemailer.createTransporter({
         service: 'gmail',
         auth: {
           user: 'your-email@gmail.com',
           pass: 'your-app-password'
         }
       });
       
       const mailOptions = {
         from: 'your-email@gmail.com',
         to: 'wantfee@hotmail.com',
         subject: `新的项目咨询 - ${req.body.projectType}`,
         text: formatEmailContent(req.body)
       };
       
       await transporter.sendMail(mailOptions);
       res.json({ success: true });
     } catch (error) {
       res.status(500).json({ success: false, error: error.message });
     }
   });
   ```

2. **更新前端代码**
   ```typescript
   export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       
       const result = await response.json();
       return result.success;
     } catch (error) {
       console.error('邮件发送失败:', error);
       return false;
     }
   };
   ```

## 环境变量配置

创建 `.env` 文件：
```env
# Formspree
REACT_APP_FORMSPREE_ID=your_form_id

# EmailJS
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id

# 自定义API
REACT_APP_API_URL=https://your-api.com
```

## 测试建议

1. **开发环境测试**
   - 使用模拟服务测试表单功能
   - 检查控制台日志

2. **生产环境测试**
   - 部署后测试真实邮件发送
   - 检查垃圾邮件文件夹

3. **表单验证测试**
   - 测试必填字段验证
   - 测试邮箱格式验证
   - 测试特殊字符处理

## 安全考虑

1. **防止垃圾邮件**
   - 添加验证码 (reCAPTCHA)
   - 限制提交频率
   - 验证邮箱真实性

2. **数据保护**
   - 使用HTTPS
   - 加密敏感数据
   - 遵守隐私法规

## 监控和维护

1. **错误监控**
   - 记录发送失败的原因
   - 设置告警机制

2. **性能监控**
   - 监控响应时间
   - 跟踪成功率

3. **用户反馈**
   - 收集用户反馈
   - 持续优化体验

## 推荐方案

**推荐使用 Formspree**，原因：
- 设置简单，无需后端
- 免费额度足够
- 功能完善
- 可靠性高
- 支持自定义邮件模板
