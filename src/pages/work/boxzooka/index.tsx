import React from "react";
import classes from "./boxzooka.module.css";
import boxzooka from "@site/static/img/boxzooka-thumbnail.png";
import boxzookaIcons1 from "@site/static/img/boxzooka-icons-1.png";
import boxzookaIcons2 from "@site/static/img/boxzooka-icons-2.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function BoxZooka() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{marginRight: "10px"}}/>
          Back to Work
        </Link>
      </div>
      <div>
        <h1>BoxZooka</h1>
        <p className={classes.description}>
        Pick and Pack Icons for BoxZooka.
        </p>
        <img src={boxzooka} style={{ width: "100%", marginBottom: "30px" }} />
        <h2>Icon Set 1</h2>
        <img
          src={boxzookaIcons1}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <h2>Icon Set 2</h2>
        <img
          src={boxzookaIcons2}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
}
