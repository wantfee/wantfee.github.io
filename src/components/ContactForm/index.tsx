import React, { useState } from "react";
import classes from "./index.module.css";
import { sendContactEmail, ContactFormData } from "../../utils/emailService";
import { MailOutlined, WechatWorkOutlined } from "@ant-design/icons";

interface ContactFormProps {
  visible: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ visible, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    { value: "ui-ux-design", label: "UI/UX 设计" },
    { value: "web-development", label: "网站开发" },
    { value: "brand-design", label: "品牌设计" },
    { value: "mobile-app", label: "移动应用" },
    { value: "webflow-squarespace", label: "Webflow/Squarespace" },
    { value: "other", label: "其他" },
  ];

  const budgetRanges = [
    { value: "under-10k", label: "10万以下" },
    { value: "10k-50k", label: "10万-50万" },
    { value: "50k-100k", label: "50万-100万" },
    { value: "100k-500k", label: "100万-500万" },
    { value: "over-500k", label: "500万以上" },
    { value: "discuss", label: "面议" },
  ];

  const timelineOptions = [
    { value: "1-month", label: "1个月内" },
    { value: "1-3-months", label: "1-3个月" },
    { value: "3-6-months", label: "3-6个月" },
    { value: "6-months-plus", label: "6个月以上" },
    { value: "flexible", label: "时间灵活" },
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 清除该字段的错误
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }

    if (!formData.email.trim()) {
      newErrors.email = "请输入您的邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (!formData.projectType) {
      newErrors.projectType = "请选择项目类型";
    }

    if (!formData.description.trim()) {
      newErrors.description = "请描述您的项目需求";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        alert("感谢您的咨询！我们会在24小时内与您联系。");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
        });
        setErrors({});
        onClose();
      } else {
        alert("提交失败，请稍后重试或直接发送邮件至 wantfee@hotmail.com");
      }
    } catch (error) {
      console.error("表单提交错误:", error);
      alert("提交失败，请稍后重试或直接发送邮件至 wantfee@hotmail.com");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    });
    setErrors({});
    onClose();
  };

  if (!visible) return null;

  return (
    <div className={classes.modalOverlay} onClick={handleCancel}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>
            <MailOutlined className={classes.titleIcon} />
            开始合作
          </h2>
          <button className={classes.closeButton} onClick={handleCancel}>
            ×
          </button>
        </div>

        <div className={classes.modalBody}>
          <p className={classes.formDescription}>
            请填写以下信息，我们会尽快与您联系讨论项目细节。
          </p>

          <form onSubmit={handleSubmit} className={classes.contactForm}>
            <div className={classes.formRow}>
              <div className={classes.formItem}>
                <label htmlFor="name">姓名 *</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="请输入您的姓名"
                  className={errors.name ? classes.inputError : ""}
                />
                {errors.name && (
                  <span className={classes.errorText}>{errors.name}</span>
                )}
              </div>

              <div className={classes.formItem}>
                <label htmlFor="email">邮箱 *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="请输入您的邮箱"
                  className={errors.email ? classes.inputError : ""}
                />
                {errors.email && (
                  <span className={classes.errorText}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={classes.formItem}>
              <label htmlFor="company">公司/组织</label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="请输入您的公司或组织名称（可选）"
              />
            </div>

            <div className={classes.formItem}>
              <label htmlFor="projectType">项目类型 *</label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) =>
                  handleInputChange("projectType", e.target.value)
                }
                className={errors.projectType ? classes.inputError : ""}
              >
                <option value="">请选择项目类型</option>
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <span className={classes.errorText}>{errors.projectType}</span>
              )}
            </div>

            <div className={classes.formRow}>
              <div className={classes.formItem}>
                <label htmlFor="budget">预算范围</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                >
                  <option value="">请选择预算范围</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget.value} value={budget.value}>
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={classes.formItem}>
                <label htmlFor="timeline">期望完成时间</label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                >
                  <option value="">请选择时间要求</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={classes.formItem}>
              <label htmlFor="description">项目描述 *</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="请详细描述您的项目需求、目标用户、功能要求等..."
                rows={4}
                className={errors.description ? classes.inputError : ""}
              />
              {errors.description && (
                <span className={classes.errorText}>{errors.description}</span>
              )}
            </div>

            <div className={classes.formActions}>
              <button
                type="button"
                onClick={handleCancel}
                className={classes.cancelButton}
              >
                取消
              </button>
              <button
                type="submit"
                disabled={loading}
                className={classes.submitButton}
              >
                {loading ? "提交中..." : "提交咨询"}
              </button>
            </div>
          </form>

          <div className={classes.contactInfo}>
            <p>或者您也可以直接联系我们：</p>
            <div className={classes.contactInfoItem}>
              <MailOutlined className={classes.contactInfoIcon} />
              <span>邮箱：wantfee@hotmail.com</span>
            </div>
            <div className={classes.contactInfoItem}>
              <span className={classes.contactInfoIcon}>
                <WechatWorkOutlined className={classes.contactIcon} />
              </span>
              <span>微信：wantfee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
