import React from "react";
import Layout from "@theme/Layout";
import classes from "./index.module.css";
import {
  UserOutlined,
  TrophyOutlined,
  BookOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  MailOutlined,
  GithubOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.navi}>
            <span className={classes.naviItem}>
              <a href="/work">作品</a>
            </span>
            <span className={classes.naviItem}>
              <a href="/blog">博客</a>
            </span>
            <span className={classes.naviItem}>
              <a href="/about">关于</a>
            </span>
          </div>
          <div className={classes.logo}>
            <span></span>
            Man<span className={classes.logoLetters}>ta</span>App
          </div>
          <div className={classes.social}>
            <span className={classes.socialItem}>
              <DribbbleOutlined />
            </span>
            <span className={classes.socialItem}>
              <a href="https://github.com/wantfee">
                <GithubOutlined />
              </a>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className={classes.mainContent}>
          <div className={classes.aboutContainer}>
            {/* Personal Introduction */}
            <div className={classes.introSection}>
              <div className={classes.avatarContainer}>
                <div className={classes.avatar}>
                  <UserOutlined style={{ fontSize: "60px", color: "#ee6c4d" }} />
                </div>
                <h1 className={classes.name}>JeffWang</h1>
                <p className={classes.title}>UI/UX Designer & Web Developer</p>
              </div>
              
              <div className={classes.bioContainer}>
                <h2 className={classes.sectionTitle}>关于我</h2>
                <p className={classes.bioText}>
                  你好！我是 JeffWang，一名拥有超过10年经验的 UI/UX 设计师和 Web 开发者。
                  我专注于创造视觉震撼且用户友好的界面，将创新与功能性完美融合。
                </p>
                <p className={classes.bioText}>
                  从静态界面到真实产品的转化过程中，我对代码有着执着的追求。
                  现在作为一名 Web 开发者，我能够流畅地将设计转化为真实的产品。
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className={classes.skillsSection}>
              <h2 className={classes.sectionTitle}>专业技能</h2>
              <div className={classes.skillsGrid}>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>设计技能</h3>
                  <ul className={classes.skillList}>
                    <li>UI/UX 设计</li>
                    <li>用户研究</li>
                    <li>原型设计</li>
                    <li>设计系统</li>
                    <li>品牌设计</li>
                  </ul>
                </div>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>开发技能</h3>
                  <ul className={classes.skillList}>
                    <li>React/TypeScript</li>
                    <li>HTML/CSS/JavaScript</li>
                    <li>响应式设计</li>
                    <li>Webflow/Squarespace</li>
                    <li>Git 版本控制</li>
                  </ul>
                </div>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>工具软件</h3>
                  <ul className={classes.skillList}>
                    <li>Figma/Sketch</li>
                    <li>Adobe Creative Suite</li>
                    <li>VS Code</li>
                    <li>Docusaurus</li>
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className={classes.experienceSection}>
              <h2 className={classes.sectionTitle}>工作经历</h2>
              <div className={classes.timeline}>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>资深 UI/UX 设计师</h3>
                    <p className={classes.timelineCompany}>自由职业者</p>
                    <p className={classes.timelinePeriod}>2020 - 至今</p>
                    <p className={classes.timelineDescription}>
                      专注于数字产品设计，为多家企业提供 UI/UX 设计服务，
                      完成超过100个设计项目。
                    </p>
                  </div>
                </div>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>Web 开发者</h3>
                    <p className={classes.timelineCompany}>独立开发</p>
                    <p className={classes.timelinePeriod}>2018 - 至今</p>
                    <p className={classes.timelineDescription}>
                      将设计转化为可用的 Web 产品，专注于现代前端技术栈，
                      已开发5+个完整项目。
                    </p>
                  </div>
                </div>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>设计学习与探索</h3>
                    <p className={classes.timelineCompany}>持续学习</p>
                    <p className={classes.timelinePeriod}>2014 - 2018</p>
                    <p className={classes.timelineDescription}>
                      深入学习和实践设计原理，掌握各种设计工具和技术，
                      为专业发展打下坚实基础。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className={classes.contactSection}>
              <h2 className={classes.sectionTitle}>联系我</h2>
              <div className={classes.contactGrid}>
                <div className={classes.contactItem}>
                  <MailOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>邮箱</h4>
                    <p>jeffwang@mantaapp.com</p>
                  </div>
                </div>
                <div className={classes.contactItem}>
                  <EnvironmentOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>位置</h4>
                    <p>中国，远程工作</p>
                  </div>
                </div>
                <div className={classes.contactItem}>
                  <HeartOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>兴趣</h4>
                    <p>设计、编程、音乐</p>
                  </div>
                </div>
              </div>
              <button className={classes.contactButton}>开始合作</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={classes.footer}>
          <p>MantaApp © 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default About;