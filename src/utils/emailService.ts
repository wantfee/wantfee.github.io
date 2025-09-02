/**
 * 邮件服务工具
 * 用于处理联系表单的提交和邮件发送
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

/**
 * 发送联系表单邮件
 * @param formData 表单数据
 * @returns Promise<boolean> 发送结果
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // 这里可以集成真实的邮件服务，比如：
    // - Formspree
    // - Netlify Forms
    // - EmailJS
    // - 自定义后端API
    
    // 模拟邮件发送过程
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 记录表单数据到控制台（开发环境）
    console.log('📧 联系表单提交:', {
      时间: new Date().toLocaleString(),
      姓名: formData.name,
      邮箱: formData.email,
      公司: formData.company || '未填写',
      项目类型: formData.projectType,
      预算: formData.budget || '未填写',
      时间要求: formData.timeline || '未填写',
      项目描述: formData.description
    });
    
    // 这里可以添加真实的邮件发送逻辑
    // 例如使用 Formspree:
    /*
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
    */
    
    return true;
  } catch (error) {
    console.error('邮件发送失败:', error);
    return false;
  }
};

/**
 * 格式化邮件内容
 * @param formData 表单数据
 * @returns string 格式化的邮件内容
 */
export const formatEmailContent = (formData: ContactFormData): string => {
  const projectTypeLabels: Record<string, string> = {
    'ui-ux-design': 'UI/UX 设计',
    'web-development': '网站开发',
    'brand-design': '品牌设计',
    'mobile-app': '移动应用',
    'webflow-squarespace': 'Webflow/Squarespace',
    'other': '其他'
  };
  
  const budgetLabels: Record<string, string> = {
    'under-10k': '10万以下',
    '10k-50k': '10万-50万',
    '50k-100k': '50万-100万',
    '100k-500k': '100万-500万',
    'over-500k': '500万以上',
    'discuss': '面议'
  };
  
  const timelineLabels: Record<string, string> = {
    '1-month': '1个月内',
    '1-3-months': '1-3个月',
    '3-6-months': '3-6个月',
    '6-months-plus': '6个月以上',
    'flexible': '时间灵活'
  };
  
  return `
新的项目咨询

基本信息：
- 姓名：${formData.name}
- 邮箱：${formData.email}
- 公司/组织：${formData.company || '未填写'}

项目信息：
- 项目类型：${projectTypeLabels[formData.projectType] || formData.projectType}
- 预算范围：${budgetLabels[formData.budget] || formData.budget || '未填写'}
- 期望完成时间：${timelineLabels[formData.timeline] || formData.timeline || '未填写'}

项目描述：
${formData.description}

---
此邮件来自网站联系表单
时间：${new Date().toLocaleString()}
  `.trim();
};

/**
 * 验证表单数据
 * @param formData 表单数据
 * @returns { isValid: boolean; errors: string[] } 验证结果
 */
export const validateFormData = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!formData.name.trim()) {
    errors.push('姓名不能为空');
  }
  
  if (!formData.email.trim()) {
    errors.push('邮箱不能为空');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('邮箱格式不正确');
  }
  
  if (!formData.projectType) {
    errors.push('请选择项目类型');
  }
  
  if (!formData.description.trim()) {
    errors.push('项目描述不能为空');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * 获取项目类型标签
 * @param value 项目类型值
 * @returns string 项目类型标签
 */
export const getProjectTypeLabel = (value: string): string => {
  const labels: Record<string, string> = {
    'ui-ux-design': 'UI/UX 设计',
    'web-development': '网站开发',
    'brand-design': '品牌设计',
    'mobile-app': '移动应用',
    'webflow-squarespace': 'Webflow/Squarespace',
    'other': '其他'
  };
  
  return labels[value] || value;
};

/**
 * 获取预算范围标签
 * @param value 预算值
 * @returns string 预算标签
 */
export const getBudgetLabel = (value: string): string => {
  const labels: Record<string, string> = {
    'under-10k': '10万以下',
    '10k-50k': '10万-50万',
    '50k-100k': '50万-100万',
    '100k-500k': '100万-500万',
    'over-500k': '500万以上',
    'discuss': '面议'
  };
  
  return labels[value] || value;
};

/**
 * 获取时间要求标签
 * @param value 时间值
 * @returns string 时间标签
 */
export const getTimelineLabel = (value: string): string => {
  const labels: Record<string, string> = {
    '1-month': '1个月内',
    '1-3-months': '1-3个月',
    '3-6-months': '3-6个月',
    '6-months-plus': '6个月以上',
    'flexible': '时间灵活'
  };
  
  return labels[value] || value;
};
