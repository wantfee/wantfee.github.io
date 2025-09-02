import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Header from "@site/src/components/Header";
import { useTranslation } from "react-i18next";
import { ChromeFilled, CodeFilled, CompassFilled } from "@ant-design/icons";
import AnimatedLink from "@site/src/components/AnimatedLink";
import PageTransition from "@site/src/components/PageTransition";
import "../i18n"; // 导入i18n配置
import "../css/animations.css"; // 导入动画样式

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { t } = useTranslation();

  return (
    <PageTransition isTransitioning={false}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          {/* Header */}
          <Header />

          {/* Main Content - Three Column Layout */}
          <div className={styles.mainContent}>
            <div className={styles.threeColumnLayout}>
              {/* Left Column - Services */}
              <div className={styles.leftColumn}>
                <div className={styles.serviceContainer}>
                  <h2>{t('services')}</h2>
                  <div className={styles.serviceItemContainer}>
                    <CompassFilled style={{ fontSize: "30px" }} />
                    <h3>{t('uiUxDesign')}</h3>
                    <p>{t('uiUxDescription')}</p>
                  </div>
                  <div className={styles.serviceItemContainer}>
                    <CodeFilled style={{ fontSize: "30px" }} />
                    <h3>{t('webDevelopment')}</h3>
                    <p>{t('webDevelopmentDescription')}</p>
                  </div>
                  <div className={styles.serviceItemContainer}>
                    <ChromeFilled style={{ fontSize: "30px" }} />
                    <h3>{t('webflowSquarespace')}</h3>
                    <p>{t('webflowSquarespaceDescription')}</p>
                  </div>
                </div>
              </div>

              {/* Center Column - Image */}
              <div className={styles.centerColumn}>
                <div className={styles.imageContainer}>
                  <div className={styles.contentImageContainer}>
                    <img
                      className={styles.contentImage}
                      src="img/manta-image.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Personal Info */}
              <div className={styles.rightColumn}>
                <div className={styles.personalInfoContainer}>
                  <div className={styles.personalInfoTitle}>
                    <h2>{t('appChangesLife')}</h2>
                  </div>
                  <div className={styles.personalInfoContent}>
                    <p>{t('personalIntroP1')}</p>
                    <p>{t('personalIntroP2')}</p>
                    <p>{t('personalIntroP3')}</p>
                    <AnimatedLink to="/work" className={styles.learnMoreButton}>
                      {t('learnMore')}
                    </AnimatedLink>
                  </div>
                  <div className={styles.achievementContainer}>
                    <div>
                      <div className={styles.achievement}>
                        10<span className={styles.year}>{t('years')}</span>
                      </div>
                      <div className={styles.achievementInfo}>{t('experience')}</div>
                    </div>
                    <div>
                      <div className={styles.achievement}>100+</div>
                      <div className={styles.achievementInfo}>{t('uiUxProjects')}</div>
                    </div>
                    <div>
                      <div className={styles.achievement}>5+</div>
                      <div className={styles.achievementInfo}>
                        {t('developedProjects')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className={styles.footer}>
            <p>{t('footer')}</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}
