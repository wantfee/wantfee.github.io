import React from "react";
import classes from "./floenvy.module.css";
import FloenvyProductPage from "@site/static/img/floenvy-product-page.svg";
import floenvy from "@site/static/img/floenvy.jpg";
import mobileFeature from "@site/static/img/floenvy-mobile-feature.png";
import productPage from "@site/static/img/floenvy-product-page.png";

export default function Hello() {
  return (
    // <Layout title="Work" description="Here's the work page">
    <div className={classes.allContainer}>
      <div>
        <h1>FloEnvy</h1>
        <p className={classes.description}>
          FloEnvy is a software for cannibis cultivation.
        </p>
        <img src={floenvy} style={{ width: "100%", marginBottom: "30px" }} />
        {/* <FloenvyProductPage style={{maxWidth:"1200px"}}/>; */}
        <h2>Mobile Feature Landing Page</h2>
        <img
          src={mobileFeature}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <h2>Product Page</h2>
        <img
          src={productPage}
          style={{ width: "100%", marginBottom: "30px" }}
        />
      </div>
    </div>
    // </Layout>
  );
}
