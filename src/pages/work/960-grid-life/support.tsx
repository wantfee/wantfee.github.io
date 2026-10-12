import React from "react";
import classes from "./support.module.css";
import Header from "@site/src/components/Header";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../css/animations.css"; // 导入动画样式

export default function SupportPage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work/960-grid-life" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to 960格子人生
        </Link>
      </div>
      <div>
        <h1>960格子人生</h1>
        <p className={classes.description}>
          技术支持中心 - 为您提供全方位的技术支持服务
        </p>

        <main className={classes.main}>
          <section className={classes.contact}>
            <h2>联系我们</h2>
            <p>如有任何问题或建议，请通过以下方式联系我们：</p>
            <div className={classes.contactInfo}>
              <p><strong>邮箱：</strong>wantfee@hotmail.com</p>
              <p><strong>响应时间：</strong>24-48小时内回复</p>
            </div>
          </section>

          <section className={classes.faq}>
            <h2>常见问题</h2>
            <div className={classes.faqItem}>
              <h3>如何使用"时光放映机"？</h3>
              <p>进入影音室，点击"时光放映机"即可开始沉浸式播放您的人生片段。支持暂停、音量控制，免费用户可体验2分钟。</p>
            </div>
            
            <div className={classes.faqItem}>
              <h3>如何导出"人生记录本"？</h3>
              <p>在影音室选择"人生记录本"，选择模板和数据范围，点击生成即可导出精美的PDF记录册。</p>
            </div>
            
            <div className={classes.faqItem}>
              <h3>订阅和退款问题</h3>
              <p>订阅通过App Store管理，如需退款请在App Store中申请。恢复购买请在应用内点击"恢复购买"按钮。</p>
            </div>
            
            <div className={classes.faqItem}>
              <h3>数据安全吗？</h3>
              <p>所有数据均存储在您的设备本地，我们不会上传或访问您的个人信息。支持iCloud同步备份。</p>
            </div>
          </section>

          <section className={classes.features}>
            <h2>主要功能</h2>
            <ul className={classes.featuresList}>
              <li>960格子人生可视化</li>
              <li>时光放映机沉浸播放</li>
              <li>人生记录本PDF导出</li>
              <li>多用户支持</li>
              <li>智能提醒设置</li>
              <li>深色模式支持</li>
            </ul>
          </section>

          <section className={classes.links}>
            <h2>相关链接</h2>
            <div className={classes.linkGrid}>
              <Link to="/work/960-grid-life/support/privacy" className={classes.linkCard}>隐私政策</Link>
              <a href="/work/960-grid-life/terms" className={classes.linkCard}>服务条款</a>
              <a href="https://apps.apple.com/app/960gridlife" className={classes.linkCard} target="_blank" rel="noopener noreferrer">App Store</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
