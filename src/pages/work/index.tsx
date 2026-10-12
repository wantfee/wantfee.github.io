import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";
import boxzooka from "@site/static/img/boxzooka-thumbnail.png";
import moreOrLess from "@site/static/img/moreorless.png";
import floenvy from "@site/static/img/floenvy.jpg";
import growlinkEcosystem from "@site/static/img/growlink-ecosystem-thumbnail.png";
import empty from "@site/static/img/empty.png";
import gridLife from "@site/static/img/960-grid-life-thumbnail.png";
import Header from "@site/src/components/Header";
import { useTranslation } from "react-i18next";
import PageTransition from "@site/src/components/PageTransition";
import "../../i18n"; // 导入i18n配置
import "../../css/animations.css"; // 导入动画样式

export default function Works() {
  const { t } = useTranslation();

  return (
    <PageTransition isTransitioning={false}>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          {/* Header */}
          <Header currentPage="work" />
          
          <div className={classes.recentWorkContainer}>
            <div className={classes.recentWorkInfo}>
              <h2 className={classes.recentWorkTitle}>{t('gridLife')}</h2>
              <p className={classes.recentWorkDescription}>
                {t('gridLifeDesc')}
              </p>
            </div>
            <div className={classes.recentWorkImage}>
              <img src={gridLife} />
            </div>
          </div>
          {/* Main Content */}
          <div className={classes.mainContent}>
            <div className={classes.allWorkContainer}>
              <div className={classes.work}>
                <a href="/work/rainbow-life">
                  <img
                    src={empty}
                    style={{ width: "100%", marginBottom: "30px" }}
                    alt=""
                  />
                </a>
                <h3 className={classes.workTitle}>{t("rainbowLife")}</h3>
                <p className={classes.workDescription}>{t("rainbowLifeDesc")}</p>
              </div>
            <div className={classes.work}>
                <a href="/work/960-grid-life">
                  <img
                    src={gridLife}
                    style={{ width: "100%", marginBottom: "30px" }}
                  />
                </a>
                <h3 className={classes.workTitle}>{t('gridLife')}</h3>
              </div>
              <div className={classes.work}>
                <a href="/work/boxzooka">
                  <img
                    src={boxzooka}
                    style={{ width: "100%", marginBottom: "30px" }}
                  />
                </a>
                <h3 className={classes.workTitle}>{t('boxzooka')}</h3>
              </div>
              <div className={classes.work}>
                <a href="/work/more-or-less">
                  <img
                    src={moreOrLess}
                    style={{ width: "100%", marginBottom: "30px" }}
                  />
                </a>
                <h3 className={classes.workTitle}>{t('moreOrLess')}</h3>
              </div>
              <div className={classes.work}>
                <a href="/work/floenvy">
                  <img
                    src={floenvy}
                    style={{ width: "100%", marginBottom: "30px" }}
                  />
                </a>
                <h3 className={classes.workTitle}>FloEnvy</h3>
              </div>
              <div className={classes.work}>
                <a href="/work/growlink-ecosystem">
                  <img
                    src={growlinkEcosystem}
                    style={{ width: "100%", marginBottom: "30px" }}
                  />
                </a>
                <h3 className={classes.workTitle}>Growlink Ecosystem</h3>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className={classes.footer}>
            <p>{t('footer')}</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}
