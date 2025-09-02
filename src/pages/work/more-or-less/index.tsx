import React, { useState } from "react";
import classes from "./moreOrLess.module.css";
import moreOrLess from "@site/static/img/moreorless.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function Hello() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
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
        <h1>More or less</h1>
        <p className={classes.description}>
          A app that helps you organize your stuff.
        </p>
        
        {/* 主图片 */}
        <div className={classes.imageContainer}>
          {!imageLoaded && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img 
            src={moreOrLess} 
            style={{ 
              width: "100%", 
              marginBottom: "30px",
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={handleImageLoad}
            loading="lazy"
            alt="More or less app"
          />
        </div>
      </div>
    </div>
  );
}
