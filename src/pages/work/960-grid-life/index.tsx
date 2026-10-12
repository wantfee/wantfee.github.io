import React from "react";
import classes from "./960-grid-life.module.css";
import gridLifeThumbnail from "@site/static/img/960-grid-life-thumbnail.png";
// import gridLife from "@site/static/img/960-grid-life.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function GridLifePage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to Work
        </Link>
      </div>
      <div>
        <h1>960格子人生</h1>
        <p className={classes.description}>
        960GridLife是一款基于SwiftUI开发的人生进度可视化应用，旨在帮助用户直观地了解自己的人生进度，珍惜时间，活在当下。
        </p>
        {/* 主图片 */}
        <div className={classes.imageContainer}>
          <img
            src={gridLifeThumbnail}
            style={{
              width: "100%",
              marginBottom: "30px",
            }}
            alt="960格子人生 main image"
          />
        </div>
        <div className={classes.info}>
          {/* 暂时注释掉下载功能，因为APP还未上线 */}
          {/* <div className={classes.downloadSection}>
            <div className={classes.qrCodeContainer}>
              <div className={classes.qrCode}>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/app/960gridlife" 
                  alt="下载960格子人生APP二维码"
                  className={classes.qrCodeImage}
                />
              </div>
              <p className={classes.downloadText}>
                扫描二维码下载<br />
                <strong>960格子人生</strong>
              </p>
            </div>
            <div className={classes.actionButtons}>
              <a 
                href="https://apps.apple.com/app/960gridlife" 
                target="_blank" 
                rel="noopener noreferrer"
                className={classes.downloadButton}
              >
                📱 App Store 下载
              </a>
              <Link 
                to="/work/960-grid-life/support"
                className={classes.supportButton}
              >
                🛠️ 技术支持
              </Link>
            </div>
          </div> */}
          
          {/* 暂时只显示技术支持按钮 */}
          <div className={classes.downloadSection}>
            <div className={classes.actionButtons}>
              <Link 
                to="/work/960-grid-life/support"
                className={classes.supportButton}
              >
                🛠️ 技术支持
              </Link>
            </div>
          </div>
        </div>
        {/* <img src={gridLife} /> */}
      </div>
    </div>
  );
}
