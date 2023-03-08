import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";

export default function Works() {
  return (
    <Layout title="Work" description="Here's the work page">
      <div className={classes.allWorkContainer}>
        <div className={classes.work}></div>
        <div className={classes.work}></div>
        <div className={classes.work}></div>
        <div className={classes.work}></div>
        <div className={classes.work}></div>
        <div className={classes.work}></div>
      </div>
    </Layout>
  );
}
