import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";
import moreOrLess from "@site/static/img/moreorless.png";
import floenvy from "@site/static/img/floenvy.jpg";
import empty from "@site/static/img/empty.png";

export default function Works() {
  return (
    <Layout title="Work" description="Here's the work page">
      <div className={classes.allWorkContainer}>
        <div className={classes.work}>
          <a href="/work/more-or-less">
            <img
              src={moreOrLess}
              style={{ width: "100%", marginBottom: "30px" }}
            />
          </a>
          <h3 className={classes.workTitle}>多少</h3>
        </div>
        <div className={classes.work}>
          <a href="/work/floenvy">
            <img
              src={floenvy}
              style={{ width: "100%", marginBottom: "30px" }}
            />
          </a>
          <h3 className={classes.workTitle}>FloEnvy</h3>
        </div>
        <div className={classes.work}>
          <img src={empty} style={{ width: "100%", marginBottom: "30px" }} />
          <h3 className={classes.workTitle}>即将上线...</h3>
        </div>
        {/* <div className={classes.work}>
          <img src={empty} style={{ width: "100%", marginBottom: "30px" }} />
          <h3 className={classes.workTitle}>即将上线...</h3>
        </div> */}
      </div>
    </Layout>
  );
}
