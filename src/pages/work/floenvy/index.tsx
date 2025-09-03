import React from "react";
import classes from "./floenvy.module.css";
import FloenvyProductPage from "@site/static/img/floenvy-product-page.svg";
import floenvy from "@site/static/img/floenvy.jpg";
import mobileFeature from "@site/static/img/floenvy-mobile-feature.png";
import productPage from "@site/static/img/floenvy-product-page.png";
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
        <h1>FloEnvy</h1>
        <p className={classes.description}>
          FloEnvy is a software for cannibis cultivation.
        </p>
        
        {/* 主图片 */}
        <div className={classes.imageContainer}>
          <img 
            src={floenvy} 
            style={{ 
              width: "100%", 
              marginBottom: "30px"
            }}
            alt="FloEnvy main image"
          />
        </div>

        {/* <FloenvyProductPage style={{maxWidth:"1200px"}}/>; */}
        <h2>Mobile Feature Landing Page</h2>
        
        {/* 移动端特性图片 */}
        <div className={classes.imageContainer}>
          <img
            src={mobileFeature}
            style={{ 
              width: "100%", 
              marginBottom: "10px"
            }}
            alt="Mobile feature landing page"
          />
        </div>

        <h2>Product Page</h2>
        
        {/* 产品页面图片 */}
        <div className={classes.imageContainer}>
          <img
            src={productPage}
            style={{ 
              width: "100%", 
              marginBottom: "30px"
            }}
            alt="Product page"
          />
        </div>
      </div>
    </div>
  );
}
