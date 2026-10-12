import React from "react";
import classes from "./privacy.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../../css/animations.css"; // 导入动画样式

export default function PrivacyPage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work/960-grid-life/support" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to 技术支持
        </Link>
      </div>
      <div>
        <h1>960GridLife 隐私政策</h1>
        <p className={classes.description}>
          我们重视您的隐私，本政策详细说明了我们如何收集、使用和保护您的个人信息。
        </p>

        <main className={classes.main}>
          <section className={classes.contact}>
            <h2>1. 信息收集</h2>
            <p>我们收集以下类型的信息：</p>
            
            <div className={classes.contactInfo}>
              <h3>个人身份信息：</h3>
              <ul className={classes.featuresList}>
                <li>用户姓名（用于创建用户档案）</li>
                <li>出生日期（用于计算人生进度）</li>
                <li>预期寿命设置（用户自定义）</li>
              </ul>
            </div>

            <div className={classes.contactInfo}>
              <h3>内容数据：</h3>
              <ul className={classes.featuresList}>
                <li>日记文字内容</li>
                <li>照片和图片（包括时间和地点元数据）</li>
                <li>人生记录和回忆</li>
              </ul>
            </div>

            <div className={classes.contactInfo}>
              <h3>使用数据：</h3>
              <ul className={classes.featuresList}>
                <li>应用使用统计</li>
                <li>功能使用情况</li>
                <li>导出记录和频率</li>
              </ul>
            </div>

            <div className={classes.contactInfo}>
              <h3>设备信息：</h3>
              <ul className={classes.featuresList}>
                <li>设备标识符</li>
                <li>应用版本信息</li>
                <li>系统版本信息</li>
              </ul>
            </div>
          </section>

          <section className={classes.faq}>
            <h2>2. 信息使用</h2>
            <p>我们使用收集的信息用于：</p>
            
            <div className={classes.faqItem}>
              <h3>核心功能：</h3>
              <ul className={classes.featuresList}>
                <li>提供人生进度计算和可视化</li>
                <li>存储和管理个人日记内容</li>
                <li>生成人生报告和导出功能</li>
                <li>多用户管理（最多5个用户，需订阅）</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>服务改进：</h3>
              <ul className={classes.featuresList}>
                <li>分析应用使用情况以改进功能</li>
                <li>优化用户体验</li>
                <li>修复技术问题</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>通知服务：</h3>
              <ul className={classes.featuresList}>
                <li>发送未活动提醒（需用户授权）</li>
                <li>发送人生进度更新通知</li>
                <li>应用功能相关通知</li>
              </ul>
            </div>
          </section>

          <section className={classes.features}>
            <h2>3. 数据存储</h2>
            
            <div className={classes.faqItem}>
              <h3>本地存储：</h3>
              <ul className={classes.featuresList}>
                <li>所有数据默认存储在用户设备本地</li>
                <li>使用SwiftData进行本地数据管理</li>
                <li>数据加密存储在设备上</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>iCloud同步（可选）：</h3>
              <ul className={classes.featuresList}>
                <li>需要订阅高级功能才能启用</li>
                <li>使用CloudKit进行数据同步</li>
                <li>数据在用户的iCloud账户中加密存储</li>
                <li>用户可以随时禁用iCloud同步</li>
              </ul>
            </div>
          </section>

          <section className={classes.links}>
            <h2>4. 数据共享</h2>
            
            <div className={classes.faqItem}>
              <h3>我们不会：</h3>
              <ul className={classes.featuresList}>
                <li>向第三方出售、出租或交易您的个人信息</li>
                <li>与广告商共享您的个人数据</li>
                <li>将您的数据用于营销目的</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>我们可能会：</h3>
              <ul className={classes.featuresList}>
                <li>在法律要求时披露信息</li>
                <li>在保护我们权利时披露信息</li>
                <li>在保护用户安全时披露信息</li>
              </ul>
            </div>
          </section>

          <section className={classes.contact}>
            <h2>5. 数据安全</h2>
            
            <div className={classes.contactInfo}>
              <h3>安全措施：</h3>
              <ul className={classes.featuresList}>
                <li>使用行业标准加密技术</li>
                <li>定期安全更新和漏洞修复</li>
                <li>限制员工对用户数据的访问</li>
                <li>实施数据访问控制</li>
              </ul>
            </div>

            <div className={classes.contactInfo}>
              <h3>数据备份：</h3>
              <ul className={classes.featuresList}>
                <li>本地数据备份到iCloud（可选）</li>
                <li>用户可控制备份设置</li>
                <li>提供数据导出功能</li>
              </ul>
            </div>
          </section>

          <section className={classes.faq}>
            <h2>6. 用户权利</h2>
            
            <div className={classes.faqItem}>
              <h3>数据控制：</h3>
              <ul className={classes.featuresList}>
                <li>查看和编辑个人信息</li>
                <li>删除账户和所有数据</li>
                <li>导出个人数据</li>
                <li>禁用特定功能</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>隐私设置：</h3>
              <ul className={classes.featuresList}>
                <li>控制通知权限</li>
                <li>管理iCloud同步</li>
                <li>设置数据保留期限</li>
                <li>选择数据共享选项</li>
              </ul>
            </div>
          </section>

          <section className={classes.features}>
            <h2>7. 儿童隐私</h2>
            <ul className={classes.featuresList}>
              <li>我们不故意收集13岁以下儿童的信息</li>
              <li>如果发现收集了儿童信息，将立即删除</li>
              <li>建议家长监督儿童使用应用</li>
            </ul>
          </section>

          <section className={classes.links}>
            <h2>8. 第三方服务</h2>
            
            <div className={classes.faqItem}>
              <h3>Apple服务：</h3>
              <ul className={classes.featuresList}>
                <li>使用App Store进行应用分发</li>
                <li>使用StoreKit处理应用内购买</li>
                <li>使用CloudKit进行数据同步（可选）</li>
                <li>使用UserNotifications发送通知</li>
              </ul>
            </div>

            <div className={classes.faqItem}>
              <h3>分析服务：</h3>
              <ul className={classes.featuresList}>
                <li>可能使用Apple Analytics（匿名数据）</li>
                <li>不收集个人身份信息</li>
              </ul>
            </div>
          </section>

          <section className={classes.contact}>
            <h2>9. 数据保留</h2>
            
            <div className={classes.contactInfo}>
              <h3>保留期限：</h3>
              <ul className={classes.featuresList}>
                <li>用户数据在账户存在期间保留</li>
                <li>删除账户后30天内完全删除数据</li>
                <li>法律要求的数据可能保留更长时间</li>
              </ul>
            </div>

            <div className={classes.contactInfo}>
              <h3>数据删除：</h3>
              <ul className={classes.featuresList}>
                <li>用户可随时删除账户</li>
                <li>提供数据导出功能</li>
                <li>删除后无法恢复数据</li>
              </ul>
            </div>
          </section>

          <section className={classes.faq}>
            <h2>10. 隐私政策更新</h2>
            <ul className={classes.featuresList}>
              <li>我们可能会更新此隐私政策</li>
              <li>重大变更会通过应用内通知</li>
              <li>继续使用应用表示接受更新</li>
            </ul>
          </section>

          <section className={classes.features}>
            <h2>11. 联系我们</h2>
            <p>如果您对此隐私政策有任何问题，请通过以下方式联系我们：</p>
            <ul className={classes.featuresList}>
              <li>应用内反馈功能</li>
              <li>邮箱：wantfee@hotmail.com</li>
              <li>技术支持页面：<Link to="/work/960-grid-life/support" className={classes.inlineLink}>点击这里</Link></li>
            </ul>
          </section>

          <section className={classes.links}>
            <h2>12. 法律适用</h2>
            <p>此隐私政策受中华人民共和国法律管辖，如有争议，应通过友好协商解决。</p>
          </section>
        </main>
      </div>
    </div>
  );
}

