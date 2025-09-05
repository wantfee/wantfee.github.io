import React, { useState } from "react";
import Layout from "@theme/Layout";
import classes from "./index.module.css";
import Header from "@site/src/components/Header";
import ContactForm from "@site/src/components/ContactForm";
import { useTranslation } from "react-i18next";
import "../../i18n"; // 导入i18n配置
import "../../css/animations.css"; // 导入动画样式
import {
  UserOutlined,
  TrophyOutlined,
  BookOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  MailOutlined,
  GithubOutlined,
  DribbbleOutlined,
  WechatOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

const About = () => {
  const { t } = useTranslation();
  const [contactFormVisible, setContactFormVisible] = useState(false);

  const handleContactClick = () => {
    setContactFormVisible(true);
  };

  const handleContactFormClose = () => {
    setContactFormVisible(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {/* Header */}
        <Header currentPage="about" />

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
                <p className={classes.title}>{t('uiUxDesigner')}</p>
              </div>
              
              <div className={classes.bioContainer}>
                <h2 className={classes.sectionTitle}>{t('aboutMe')}</h2>
                <p className={classes.bioText}>
                  {t('bio1')}
                </p>
                <p className={classes.bioText}>
                  {t('bio2')}
                </p>
                <p className={classes.bioText}>
                  {t('bio3')}
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className={classes.skillsSection}>
              <h2 className={classes.sectionTitle}>{t('skills')}</h2>
              <div className={classes.skillsGrid}>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>{t('designSkills')}</h3>
                  <ul className={classes.skillList}>
                    <li>{t('uiUxDesign')}</li>
                    <li>{t('userResearch')}</li>
                    <li>{t('prototypeDesign')}</li>
                    <li>{t('designSystem')}</li>
                    <li>{t('brandDesign')}</li>
                  </ul>
                </div>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>{t('developmentSkills')}</h3>
                  <ul className={classes.skillList}>
                    <li>{t('reactTypeScript')}</li>
                    <li>{t('htmlCssJs')}</li>
                    <li>{t('responsiveDesign')}</li>
                    <li>{t('webflowSquarespace')}</li>
                    <li>{t('gitVersionControl')}</li>
                  </ul>
                </div>
                <div className={classes.skillCategory}>
                  <h3 className={classes.skillTitle}>{t('tools')}</h3>
                  <ul className={classes.skillList}>
                    <li>{t('figmaSketch')}</li>
                    <li>{t('adobeCreativeSuite')}</li>
                    <li>{t('vsCode')}</li>
                    <li>{t('cursor')}</li>
                    <li>{t('github')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className={classes.experienceSection}>
              <h2 className={classes.sectionTitle}>{t('workExperience')}</h2>
              <div className={classes.timeline}>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>
                      {t('uiUxDesigner')}
                    </h3>
                    <p className={classes.timelineCompany}>
                      {t('floenvyGrowlink')}
                    </p>
                    <p className={classes.timelinePeriod}>{t('period2020Present')}</p>
                    <p className={classes.timelineDescription}>
                      {t('floenvyDescription')}
                    </p>
                  </div>
                </div>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>{t('appDeveloper')}</h3>
                    <p className={classes.timelineCompany}>{t('flyingFishSonar')}</p>
                    <p className={classes.timelinePeriod}>{t('period20142020')}</p>
                    <p className={classes.timelineDescription}>
                      {t('flyingFishDescription')}
                    </p>
                  </div>
                </div>
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot}></div>
                  <div className={classes.timelineContent}>
                    <h3 className={classes.timelineTitle}>{t('designLearning')}</h3>
                    <p className={classes.timelineCompany}>{t('hanXuesongStarLion')}</p>
                    <p className={classes.timelinePeriod}>{t('period20102014')}</p>
                    <p className={classes.timelineDescription}>
                      {t('designLearningDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className={classes.contactSection}>
              <h2 className={classes.sectionTitle}>{t('contactMe')}</h2>
              <div className={classes.contactGrid}>
                <div className={classes.contactItem}>
                  <WechatWorkOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>{t('wechat')}</h4>
                    <p>wantfee</p>
                  </div>
                </div>
                <div className={classes.contactItem}>
                  <MailOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>{t('email')}</h4>
                    <p>wantfee@hotmail.com</p>
                  </div>
                </div>
                <div className={classes.contactItem}>
                  <EnvironmentOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>{t('location')}</h4>
                    <p>{t('china')}，{t('xian')}</p>
                  </div>
                </div>
                <div className={classes.contactItem}>
                  <HeartOutlined className={classes.contactIcon} />
                  <div className={classes.contactInfo}>
                    <h4>{t('interests')}</h4>
                    <p>{t('designProgrammingMusic')}</p>
                  </div>
                </div>
              </div>
              <button 
                className={classes.contactButton}
                onClick={handleContactClick}
              >
                {t('startCollaboration')}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={classes.footer}>
          <p>{t('footer')}</p>
        </footer>
      </div>

      {/* 联系表单弹窗 */}
      <ContactForm 
        visible={contactFormVisible}
        onClose={handleContactFormClose}
      />
    </div>
  );
};

export default About;
