import React from "react";
import classes from "./floenvy.module.css";
import growlinkEcosystemThumbnail from "@site/static/img/growlink-ecosystem-thumbnail.png";
// import growlinkEcosystemLandingPage from "@site/static/img/growlink-ecosystem-landing-page.png";

export default function Hello() {
  return (
    // <Layout title="Work" description="Here's the work page">
    <div className={classes.allContainer}>
      <div>
        <h1>Growlink Ecosystem Concept</h1>
        <p className={classes.description}>
          Growlink brings greenhouses, indoor farms and Traditional Crops
          facility automation, data, and teams together in one place.
        </p>
        <img
          src={growlinkEcosystemThumbnail}
          style={{ width: "100%", marginBottom: "30px" }}
        />
        {/* <FloenvyProductPage style={{maxWidth:"1200px"}}/>; */}
        {/* <h2>Mobile Feature Landing Page</h2>
        <img
          src={growlinkEcosystemLandingPage}
          style={{ width: "100%", marginBottom: "10px" }}
        /> */}
      </div>
    </div>
    // </Layout>
  );
}
