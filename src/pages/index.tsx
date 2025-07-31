import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import {
  ChromeFilled,
  CodeFilled,
  CompassFilled,
  DribbbleOutlined,
  GithubOutlined,
} from "@ant-design/icons";

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
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.navi}>
            <span className={styles.naviItem}>
              <a href="/work">Works</a>
            </span>
            <span className={styles.naviItem}>
              <a href="/blog">Blog</a>
            </span>
            <span className={styles.naviItem}>
              <a href="/about">About</a>
            </span>
          </div>
          <div className={styles.logo}>
            Man<span className={styles.logoLetters}>ta</span>App
          </div>
          <div className={styles.social}>
            <span className={styles.socialItem}>
              <DribbbleOutlined />
            </span>
            <span className={styles.socialItem}>
              <a href="https://github.com/wantfee">
                <GithubOutlined />
              </a>
            </span>
          </div>
        </div>

        {/* Main Content - Three Column Layout */}
        <div className={styles.mainContent}>
          <div className={styles.threeColumnLayout}>
            {/* Left Column - Services */}
            <div className={styles.leftColumn}>
              <div className={styles.serviceContainer}>
                <h2>Services</h2>
                <div className={styles.serviceItemContainer}>
                  <CompassFilled style={{ fontSize: "30px" }} />
                  <h3>UI/UX Design</h3>
                  <p>
                    Hyper-fine polish your digital interface with my over 10 years
                    UI/UX design experience.
                  </p>
                </div>
                <div className={styles.serviceItemContainer}>
                  <CodeFilled style={{ fontSize: "30px" }} />
                  <h3>Web Development</h3>
                  <p>
                    Hyper-fine polish your digital interface with my over 10 years
                    UI/UX design experience.
                  </p>
                </div>
                <div className={styles.serviceItemContainer}>
                  <ChromeFilled style={{ fontSize: "30px" }} />
                  <h3>Webflow/Squarespace</h3>
                  <p>
                    Hyper-fine polish your digital interface with my over 10 years
                    UI/UX design experience.
                  </p>
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
                <h2>App Changes Life</h2>
                <p>
                  Hi! I'm JeffWang. A UI/UX desginer crafting visually stunning
                  and user-friendly interface that blend innovation with
                  functionality.
                </p>
                <p>
                  To make a static interface into a real product，I'm obsessed
                  with code. Now as a web developer, I can convert the interface
                  to real product smoothly.
                </p>
                <button className={styles.contactButton}>Contact me</button>
                <div className={styles.achievementContainer}>
                  <div>
                    <div className={styles.achievement}>
                      10<span className={styles.year}>Years</span>
                    </div>
                    <div className={styles.achievementInfo}>Experience</div>
                  </div>
                  <div>
                    <div className={styles.achievement}>100+</div>
                    <div className={styles.achievementInfo}>UI/UX Projects</div>
                  </div>
                  <div>
                    <div className={styles.achievement}>5+</div>
                    <div className={styles.achievementInfo}>
                      Developed Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>MantaApp © 2024</p>
        </footer>
      </div>
    </div>
  );
}
