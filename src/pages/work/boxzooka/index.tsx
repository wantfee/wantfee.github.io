import React from "react";
import classes from "./boxzooka.module.css";
import boxzooka from "@site/static/img/boxzooka-thumbnail.png";
import boxzookaIcons1 from "@site/static/img/boxzooka-icons-1.png";
import boxzookaIcons2 from "@site/static/img/boxzooka-icons-2.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function BoxZooka() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{marginRight: "10px"}}/>
          Back to Work
        </Link>
      </div>
      <div>
        <h1>BoxZooka</h1>
        <p className={classes.description}>
        Pick and Pack Icons for BoxZooka.
        </p>
        
        {/* 主图片 */}
        <div className={classes.imageContainer}>
          <img 
            src={boxzooka} 
            style={{ 
              width: "100%", 
              marginBottom: "30px"
            }}
            alt="BoxZooka main image"
          />
        </div>

        <h2>Icon Set 1</h2>
        
        {/* 图标集1 */}
        <div className={classes.imageContainer}>
          <img
            src={boxzookaIcons1}
            style={{ 
              width: "100%", 
              marginBottom: "10px"
            }}
            alt="Icon set 1"
          />
        </div>

        <h2>Icon Set 2</h2>
        
        {/* 图标集2 */}
        <div className={classes.imageContainer}>
          <img
            src={boxzookaIcons2}
            style={{ 
              width: "100%", 
              marginBottom: "10px"
            }}
            alt="Icon set 2"
          />
        </div>
      </div>
    </div>
  );
}
