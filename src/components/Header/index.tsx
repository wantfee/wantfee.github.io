import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classes from "./index.module.css";
import { DribbbleOutlined, GithubOutlined } from "@ant-design/icons";
import i18n from "../../i18n"; // 直接导入i18n实例
import { hasNewBlogPosts } from "../../utils/blogUtils";

interface HeaderProps {
  currentPage?: string; // 当前页面标识
  newBlogPosts?: boolean; // 是否有新博客文章（可选，如果不提供则自动检查）
}

export default function Header({ currentPage, newBlogPosts }: HeaderProps) {
  const { t } = useTranslation();
  const [showNewBlogDot, setShowNewBlogDot] = useState(false);
  
  // 切换语言
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // 检查是否有新博客文章
  useEffect(() => {
    if (newBlogPosts !== undefined) {
      setShowNewBlogDot(newBlogPosts);
    } else {
      setShowNewBlogDot(hasNewBlogPosts());
    }
  }, [newBlogPosts]);

  return (
    <div className={classes.header}>
      <div className={classes.navi}>
        <span className={classes.naviItem}>
          <a
            href="/work"
            className={currentPage === "work" ? classes.active : ""}
          >
            {t('works')}
          </a>
        </span>
        <span className={classes.naviDivider}>/</span>
        <span className={classes.naviItem}>
          <a
            href="/blog"
            className={currentPage === "blog" ? classes.active : ""}
          >
            {t('blog')}
            {showNewBlogDot && <span className={classes.newBlogDot}></span>}
          </a>
        </span>
        <span className={classes.naviDivider}>/</span>
        <span className={classes.naviItem}>
          <a
            href="/about"
            className={currentPage === "about" ? classes.active : ""}
          >
            {t('about')}
          </a>
        </span>
      </div>
      <div className={classes.logo}>
        <a href="/" className={classes.logoLink}>
          Man<span className={classes.logoLetters}>ta</span>App
        </a>
      </div>
      <div className={classes.social}>
        <span className={classes.languageSwitch}>
          <span className={classes.languageItem}>
            <button 
              className={`${classes.languageButton} ${i18n.language === 'en' ? classes.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </span>
          <span className={classes.languageDivider}>/</span>
          <span className={classes.languageItem}>
            <button 
              className={`${classes.languageButton} ${i18n.language === 'zh' ? classes.active : ''}`}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
          </span>
        </span>
        <span className={classes.socialItem}>
          <DribbbleOutlined />
        </span>
        <span className={classes.socialItem}>
          <a href="https://github.com/wantfee" target="_blank">
            <GithubOutlined />
          </a>
        </span>
      </div>
    </div>
  );
}
