import React from "react";
import classes from "./growlink.module.css";
import growlinkEcosystemThumbnail from "@site/static/img/growlink-ecosystem-thumbnail.png";
import growlinkConnectControllerGraphic from "@site/static/img/connect-controller-graphic.jpg";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function Hello() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{marginRight: "10px"}}/>
          Back to Work
        </Link>
      </div>
      <div>
        <h1>Growlink Ecosystem Concept</h1>
        <p className={classes.description}>
          Growlink brings greenhouses, indoor farms and Traditional Crops
          facility automation, data, and teams together in one place.
        </p>
        
        {/* 缩略图 */}
        <div className={classes.imageContainer}>
          <img
            src={growlinkEcosystemThumbnail}
            style={{ 
              width: "100%", 
              marginBottom: "30px"
            }}
            alt="Growlink ecosystem thumbnail"
          />
        </div>
        
        {/* 连接控制器图形 */}
        <div className={classes.imageContainer}>
          <img
            src={growlinkConnectControllerGraphic}
            style={{ 
              width: "100%", 
              marginBottom: "30px"
            }}
            alt="Connect controller graphic"
          />
        </div>
      </div>
    </div>
  );
}
