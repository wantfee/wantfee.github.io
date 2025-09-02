import React, { useState } from "react";
import classes from "./floenvy.module.css";
import FloenvyProductPage from "@site/static/img/floenvy-product-page.svg";
import floenvy from "@site/static/img/floenvy.jpg";
import mobileFeature from "@site/static/img/floenvy-mobile-feature.png";
import productPage from "@site/static/img/floenvy-product-page.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import "../../../css/animations.css"; // 导入动画样式

export default function Hello() {
  const [loadedImages, setLoadedImages] = useState({
    floenvy: false,
    mobileFeature: false,
    productPage: false
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
        <h1>FloEnvy</h1>
        <p className={classes.description}>
          FloEnvy is a software for cannibis cultivation.
        </p>
        
        {/* 主图片 */}
        <div className={classes.imageContainer}>
          {!loadedImages.floenvy && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img 
            src={floenvy} 
            style={{ 
              width: "100%", 
              marginBottom: "30px",
              opacity: loadedImages.floenvy ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={() => handleImageLoad('floenvy')}
            loading="lazy"
            alt="FloEnvy main image"
          />
        </div>

        {/* <FloenvyProductPage style={{maxWidth:"1200px"}}/>; */}
        <h2>Mobile Feature Landing Page</h2>
        
        {/* 移动端特性图片 */}
        <div className={classes.imageContainer}>
          {!loadedImages.mobileFeature && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img
            src={mobileFeature}
            style={{ 
              width: "100%", 
              marginBottom: "10px",
              opacity: loadedImages.mobileFeature ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={() => handleImageLoad('mobileFeature')}
            loading="lazy"
            alt="Mobile feature landing page"
          />
        </div>

        <h2>Product Page</h2>
        
        {/* 产品页面图片 */}
        <div className={classes.imageContainer}>
          {!loadedImages.productPage && (
            <div className={classes.imagePlaceholder}>
              <LoadingOutlined className={classes.loadingIcon} />
              <p>Loading image...</p>
            </div>
          )}
          <img
            src={productPage}
            style={{ 
              width: "100%", 
              marginBottom: "30px",
              opacity: loadedImages.productPage ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}
            onLoad={() => handleImageLoad('productPage')}
            loading="lazy"
            alt="Product page"
          />
        </div>
      </div>
    </div>
  );
}
