import React from "react";
import classes from "./rainbow-life.module.css";
import placeholder from "@site/static/img/empty.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../css/animations.css";

export default function RainbowLifePage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to Work
        </Link>
      </div>
      <div>
        <h1>Rainbow Life</h1>
        <p className={classes.description}>
          Rainbow Life is a life timeline for you and your family. Record
          experiences along the years you have lived, see the stage of life
          you are in, and keep that timeline on your own devices with iCloud.
        </p>
        <div className={classes.imageContainer}>
          <img
            src={placeholder}
            style={{
              width: "100%",
              marginBottom: "30px",
            }}
            alt=""
          />
        </div>
        <div className={classes.info}>
          <div className={classes.downloadSection}>
            <div className={classes.actionButtons}>
              <Link
                to="/work/rainbow-life/support/privacy"
                className={classes.supportButton}
              >
                Privacy Policy
              </Link>
              <Link
                to="/work/rainbow-life/support/terms"
                className={classes.supportButton}
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
