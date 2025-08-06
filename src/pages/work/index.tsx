import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";
import moreOrLess from "@site/static/img/moreorless.png";
import floenvy from "@site/static/img/floenvy.jpg";
import growlinkEcosystem from "@site/static/img/growlink-ecosystem-thumbnail.png";
import empty from "@site/static/img/empty.png";
import Header from "@site/src/components/Header";

export default function Works() {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {/* Header */}
        <Header currentPage="work" />
        
        <div className={classes.recentWorkContainer}>
          <div className={classes.recentWorkInfo}>
            <h2 className={classes.recentWorkTitle}>多少</h2>
            <p className={classes.recentWorkDescription}>
              A app that helps you organize your stuff.
            </p>
          </div>
          <div className={classes.recentWorkImage}>
            <img src={moreOrLess} />
          </div>
        </div>
        {/* Main Content */}
        <div className={classes.mainContent}>
          <div className={classes.allWorkContainer}>
            <div className={classes.work}>
              <a href="/work/more-or-less">
                <img
                  src={moreOrLess}
                  style={{ width: "100%", marginBottom: "30px" }}
                />
              </a>
              <h3 className={classes.workTitle}>多少</h3>
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
            <div className={classes.work}>
              <img
                src={empty}
                style={{ width: "100%", marginBottom: "30px" }}
              />
              <h3 className={classes.workTitle}>即将上线...</h3>
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
}
