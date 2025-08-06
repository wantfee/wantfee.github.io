import React from "react";
import classes from "./index.module.css";
import {
  DribbbleOutlined,
  GithubOutlined,
} from "@ant-design/icons";

interface HeaderProps {
  currentPage?: string; // 当前页面标识
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <div className={classes.header}>
      <div className={classes.navi}>
        <span className={classes.naviItem}>
          <a href="/work" className={currentPage === "work" ? classes.active : ""}>
            Works
          </a>
        </span>
        <span className={classes.naviItem}>
          <a href="/blog" className={currentPage === "blog" ? classes.active : ""}>
            Blog
          </a>
        </span>
        <span className={classes.naviItem}>
          <a href="/about" className={currentPage === "about" ? classes.active : ""}>
            About
          </a>
        </span>
      </div>
      <div className={classes.logo}>
        <a href="/" className={classes.logoLink}>Man<span className={classes.logoLetters}>ta</span>App</a>
      </div>
      <div className={classes.social}>
        <span className={classes.socialItem}>
          <DribbbleOutlined />
        </span>
        <span className={classes.socialItem}>
          <a href="https://github.com/wantfee">
            <GithubOutlined />
          </a>
        </span>
      </div>
    </div>
  );
} 