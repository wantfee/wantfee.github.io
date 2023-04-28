import React from "react";
import classes from "./moreOrLess.module.css";
import moreOrLess from "@site/static/img/moreorless.png";

export default function Hello() {
  return (
    // <Layout title="Work" description="Here's the work page">
    <div className={classes.allContainer}>
      <div>
        <h1>More or less</h1>
        <p className={classes.description}>
          A app that helps you organize your stuff.
        </p>
        <img src={moreOrLess} style={{ width: "100%", marginBottom: "30px" }} />
      </div>
    </div>
    // </Layout>
  );
}
