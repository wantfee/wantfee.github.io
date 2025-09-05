import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 翻译资源
const resources = {
  en: {
    translation: {
      // 导航菜单
      works: 'Works',
      blog: 'Blog',
      about: 'About',
      
      // 首页内容
      services: 'Services',
      uiUxDesign: 'UI/UX Design',
      appDevelopment: 'App Development',
      webflowSquarespace: 'Webflow/Squarespace',
      uiUxDescription: 'Hyper-fine polish your digital interface with my over 10 years UI/UX design experience.',
      appChangesLife: 'App Changes Life',
      personalIntro: "Hi! I'm JeffWang. A UI/UX desginer crafting visually stunning and user-friendly interface that blend innovation with functionality.",
      codeObsession: "To make a static interface into a real product，I'm obsessed with code. Now as an app developer, I can convert the interface to real product smoothly.",
      contactMe: 'Contact me',
      learnMore: 'Learn More',
      experience: 'Experience',
      years: 'Years',
      uiUxProjects: 'UI/UX Projects',
      developedProjects: 'Developed Projects',
      
      // 作品页面
      recentWork: 'Recent Work',
      moreOrLess: 'More or Less',
      moreOrLessDesc: 'A app that helps you organize your stuff.',
      comingSoon: 'Coming Soon...',
      
      // 关于页面
      aboutMe: 'About Me',
      uiUxDesigner: 'UI/UX Designer & App Developer',
      bio1: 'Hello! I am JeffWang, a UI/UX designer and App developer with over 10 years of experience. I focus on creating visually stunning and user-friendly interfaces that blend innovation with functionality.',
      bio2: 'In the process of transforming static interfaces into real products, I am obsessed with code. Now as an app developer, I can smoothly convert designs into real products.',
      skills: 'Professional Skills',
      designSkills: 'Design Skills',
      developmentSkills: 'Development Skills',
      tools: 'Tools & Software',
      workExperience: 'Work Experience',
      seniorDesigner: 'Senior UI/UX Designer',
      freelancer: 'Freelancer',
      appDeveloper: 'App Developer',
      independentDev: 'Independent Development',
      designLearning: 'Design Learning & Exploration',
      continuousLearning: 'Continuous Learning',
      email: 'Email',
      location: 'Location',
      interests: 'Interests',
      startCollaboration: 'Start Collaboration',
      china: 'China',
      remoteWork: 'Remote Work',
      designProgrammingMusic: 'Design, Programming, Music',
      
      // 通用
      footer: 'MantaApp © 2024'
    }
  },
  zh: {
    translation: {
      // 导航菜单
      works: '作品',
      blog: '博客',
      about: '关于',
      
      // 首页内容
      services: '服务',
      uiUxDesign: 'UI/UX 设计',
      appDevelopment: 'App 开发',
      webflowSquarespace: 'Webflow/Squarespace',
      uiUxDescription: '凭借超过10年的UI/UX设计经验，为您的数字界面提供精细打磨。',
      appChangesLife: '应用改变生活',
      personalIntro: '你好！我是JeffWang。一名UI/UX设计师，专注于创造视觉震撼且用户友好的界面，将创新与功能性完美融合。',
      codeObsession: '为了将静态界面转化为真实产品，我对代码有着执着的追求。现在作为一名App开发者，我能够流畅地将设计转化为真实的产品。',
      contactMe: '联系我',
      learnMore: '了解更多',
      experience: '经验',
      years: '年',
      uiUxProjects: 'UI/UX 项目',
      developedProjects: '开发项目',
      
      // 作品页面
      recentWork: '近期作品',
      moreOrLess: '多少',
      moreOrLessDesc: '一个帮助您整理物品的应用。',
      comingSoon: '即将上线...',
      
      // 关于页面
      aboutMe: '关于我',
      uiUxDesigner: 'UI/UX 设计师 & App 开发者',
      bio1: '你好！我是 JeffWang，一名拥有超过10年经验的 UI/UX 设计师和 App 开发者。我专注于创造视觉震撼且用户友好的界面，将创新与功能性完美融合。',
      bio2: '从静态界面到真实产品的转化过程中，我对代码有着执着的追求。现在作为一名 App 开发者，我能够流畅地将设计转化为真实的产品。',
      skills: '专业技能',
      designSkills: '设计技能',
      developmentSkills: '开发技能',
      tools: '工具软件',
      workExperience: '工作经历',
      seniorDesigner: '资深 UI/UX 设计师',
      freelancer: '自由职业者',
      appDeveloper: 'App 开发者',
      independentDev: '独立开发',
      designLearning: '设计学习与探索',
      continuousLearning: '持续学习',
      email: '邮箱',
      location: '位置',
      interests: '兴趣',
      startCollaboration: '开始合作',
      china: '中国',
      remoteWork: '远程工作',
      designProgrammingMusic: '设计、编程、音乐',
      
      // 通用
      footer: 'MantaApp © 2024'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // React已经处理了XSS
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
