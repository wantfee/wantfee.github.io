import React from "react";
import Layout from "@theme/Layout";
import classes from "./floenvy.module.css";
import FloenvyProductPage from '@site/static/img/floenvy-product-page.svg';

export default function Hello() {
  return (
    // <Layout title="Work" description="Here's the work page">
      <div className={classes.allContainer}>
        <div>
          <h1>FloEnvy.</h1>
          <p>By streamlining production tracking, our mobile and web systems capture each decision on the ground from logging cultivation variables to managing labor efficiency. Data generated on our platform powers reproducible results that serve to define industry standards.</p>
          <FloenvyProductPage style={{maxWidth:"1200px"}}/>;
        </div>
      </div>
    // </Layout>
  );
}
