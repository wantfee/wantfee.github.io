import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";
import moreOrLess from '@site/static/img/more-or-less.png';

export default function Works() {
  return (
    <Layout title="Work" description="Here's the work page">
      <div className={classes.allWorkContainer}>
        <div className={classes.work}>
        <img src={moreOrLess} style={{width:"100%", marginBottom:"30px"}}/>
        <h3 className={classes.workTitle}>多少</h3>
        </div>
        <div className={classes.workEmpty}>即将上线...</div>
        <div className={classes.workEmpty}>即将上线...</div>
        {/* <div className={classes.workEmpty}>即将上线...</div>
        <div className={classes.workEmpty}>即将上线...</div>
        <div className={classes.workEmpty}>即将上线...</div> */}
      </div>
    </Layout>
  );
}
