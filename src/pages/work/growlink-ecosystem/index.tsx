import React, { useState } from "react";
import classes from "./growlink.module.css";
import growlinkEcosystemThumbnail from "@site/static/img/growlink-ecosystem-thumbnail.png";
import growlinkConnectControllerGraphic from "@site/static/img/connect-controller-graphic.jpg";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function Hello() {
  const [loadedImages, setLoadedImages] = useState({
    thumbnail: false,
    graphic: false
  });

  const handleImageLoad = (imageName: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

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
          {!loadedImages.thumbnail && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img
            src={growlinkEcosystemThumbnail}
            style={{ 
              width: "100%", 
              marginBottom: "30px",
              opacity: loadedImages.thumbnail ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={() => handleImageLoad('thumbnail')}
            loading="lazy"
            alt="Growlink ecosystem thumbnail"
          />
        </div>
        
        {/* 连接控制器图形 */}
        <div className={classes.imageContainer}>
          {!loadedImages.graphic && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img
            src={growlinkConnectControllerGraphic}
            style={{ 
              width: "100%", 
              marginBottom: "30px",
              opacity: loadedImages.graphic ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={() => handleImageLoad('graphic')}
            loading="lazy"
            alt="Connect controller graphic"
          />
        </div>
      </div>
    </div>
  );
}
