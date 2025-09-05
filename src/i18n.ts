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
      appDevelopment: 'App Development',
      webflowSquarespace: 'Webflow/Squarespace',
      uiUxDescription: 'With over 10 years of UI/UX design experience, from user research to prototype design, I create digital interfaces with excellent user experience and visually stunning design, driving user engagement and business growth.',
      appDevelopmentDescription: 'Using modern technologies like React, Angular, TypeScript, Swift and responsive design principles to transform static digital interfaces into powerful app applications.',
      webflowSquarespaceDescription: 'Proficient in operating no-code platforms to quickly build stunning professional websites. Perfect for businesses that need rapid deployment and simple content management.',
      appChangesLife: 'App Changes Life',
      personalIntroP1: "Hi! I'm JeffWang, a UI/UX designer and App developer with over 10 years of experience.",
      personalIntroP2: "I focus on creating Apps with visually stunning interfaces, comprehensive functionality, and excellent user experience. I'm committed to combining design thinking with technical implementation to provide clients with complete solutions from concept to product.",
      personalIntroP3: "I'm proficient in using AI programming tools like Cursor to accelerate development. This allows me to transform static interfaces into real products more efficiently while maintaining high code quality.",
      learnMore: 'Learn More',
      experience: 'Experience',
      years: 'Years',
      uiUxProjects: 'UI/UX Projects',
      developedProjects: 'Developed Projects',
      
      // 作品页面
      recentWork: 'Recent Work',
      boxzooka: 'Boxzooka',
      boxzookaDesc: 'A comprehensive e-commerce platform for seamless online shopping experience.',
      moreOrLess: 'More or Less',
      moreOrLessDesc: 'A app that helps you organize your stuff.',
      comingSoon: 'Coming Soon...',
      
      // 关于页面
      aboutMe: 'About Me',
      uiUxDesigner: 'UI/UX Designer & App Developer',
      bio1: "Hi! I'm JeffWang, a UI/UX designer and App developer with over 10 years of experience.",
      bio2: "I focus on creating Apps with visually stunning interfaces, comprehensive functionality, and excellent user experience. I'm committed to combining design thinking with technical implementation to provide clients with complete solutions from concept to product.",
      bio3: "I'm proficient in using AI programming tools like Cursor to accelerate development. This allows me to transform static interfaces into real products more efficiently while maintaining high code quality.I currently live in Xi\'an, China.",
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
      contactMe: 'Contact Me',
      email: 'Email',
      location: 'Location',
      interests: 'Interests',
      startCollaboration: 'Start Collaboration',
      china: 'China',
      remoteWork: 'Remote Work',
      designProgrammingMusic: 'Design, Programming, Music',
      
      // 技能详情
      uiUxDesign: 'UI/UX Design',
      userResearch: 'User Research',
      prototypeDesign: 'Prototype Design',
      designSystem: 'Design System',
      brandDesign: 'Brand Design',
      reactTypeScript: 'React/TypeScript',
      htmlCssJs: 'HTML/CSS/JavaScript',
      responsiveDesign: 'Responsive Design',
      gitVersionControl: 'Git Version Control',
      figmaSketch: 'Figma/Sketch',
      adobeCreativeSuite: 'Adobe Creative Suite',
      vsCode: 'VS Code',
      cursor: 'Cursor',
      github: 'GitHub',
      
      // 工作经历
      floenvyGrowlink: 'FloEnvy & GrowLink',
      period2020Present: '2020 - Present',
      floenvyDescription: 'Independent Contractor for US smart agriculture technology companies FloEnvy and GrowLink, responsible for UI/UX design and web development. Completed FloEnvy company website upgrade and deployment, developed multiple features for FloEnvy Dashboard software. Completed complete reconstruction and development of Growlink company website and Hubspot templates.',
      flyingFishSonar: 'Flying Fish Sonar',
      period20142020: '2014 - 2020',
      flyingFishDescription: 'Focused on the development and maintenance of the Flying Fish Sonar personal blog, with content mainly about IT cutting-edge information. Has been operating continuously for 8 years, maintaining a frequency of 3-4 updates per week.',
      hanXuesongStarLion: 'Han Xuesong & Star Lion Creative',
      period20102014: '2010 - 2014',
      designLearningDescription: 'Learned UI design under Han Xuedong, then trained at Star Lion Creative, received the honor of outstanding student in the current period, and created the personal blog "Flying Fish Sonar".',
      
      // 联系信息
      wechat: 'WeChat',
      xian: 'Xi\'an',
      
      // 通用
      footer: 'Copyright © 2025 MantaApp. 保留所有权利。'
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
      appDevelopment: 'App 开发',
      webflowSquarespace: 'Webflow/Squarespace',
      uiUxDescription: '凭借超过10年的UI/UX设计经验，从用户研究到原型设计，创造用户体验优秀且视觉震撼的数字界面，推动用户参与度和业务增长。',
      appDevelopmentDescription: '使用React、Angular、TypeScript、Swift等现代技术和响应式设计原则，将静态的数字界面转化为功能强大的App应用程序。',
      webflowSquarespaceDescription: '熟练操作无代码平台，快速构建令人惊艳的专业网站。完美适合需要快速部署和简单内容管理的企业。',
      appChangesLife: '应用改变生活',
      personalIntroP1: '你好！我是JeffWang。一名拥有超过10年经验的UI/UX设计师和App开发者。',
      personalIntroP2: '我专注于创造拥有视觉震撼的界面、功能细致完备且用户体验优秀的App。致力于将设计思维与技术实现相结合，为客户提供从概念到产品的完整解决方案。',
      personalIntroP3: '我熟练使用AI编程工具如Cursor来加速开发进程。这使我能够更高效地将静态界面转化为真实产品，同时保持高质量的代码标准。',
      learnMore: '了解更多',
      experience: '经验',
      years: '年',
      uiUxProjects: 'UI/UX 项目',
      developedProjects: '开发项目',
      
      // 作品页面
      recentWork: '近期作品',
      boxzooka: 'Boxzooka',
      boxzookaDesc: '一个全面的电商平台，提供无缝的在线购物体验。',
      moreOrLess: '多少',
      moreOrLessDesc: '一个帮助您整理物品的应用。',
      comingSoon: '即将上线...',
      
      // 关于页面
      aboutMe: '关于我',
      uiUxDesigner: 'UI/UX 设计师 & App 开发者',
      bio1: '你好！我是JeffWang。一名拥有超过10年经验的UI/UX设计师和App开发者。',
      bio2: '我专注于创造拥有视觉震撼的界面、功能细致完备且用户体验优秀的App。致力于将设计思维与技术实现相结合，为客户提供从概念到产品的完整解决方案。',
      bio3: '我熟练使用AI编程工具如Cursor来加速开发进程。这使我能够更高效地将静态界面转化为真实产品，同时保持高质量的代码标准。我目前生活在中国，西安。',
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
      contactMe: '联系我',
      email: '邮箱',
      location: '位置',
      interests: '兴趣',
      startCollaboration: '开始合作',
      china: '中国',
      remoteWork: '远程工作',
      designProgrammingMusic: '设计、编程、音乐',
      
      // 技能详情
      uiUxDesign: 'UI/UX 设计',
      userResearch: '用户研究',
      prototypeDesign: '原型设计',
      designSystem: '设计系统',
      brandDesign: '品牌设计',
      reactTypeScript: 'React/TypeScript',
      htmlCssJs: 'HTML/CSS/JavaScript',
      responsiveDesign: '响应式设计',
      gitVersionControl: 'Git 版本控制',
      figmaSketch: 'Figma/Sketch',
      adobeCreativeSuite: 'Adobe Creative Suite',
      vsCode: 'VS Code',
      cursor: 'Cursor',
      github: 'GitHub',
      
      // 工作经历
      floenvyGrowlink: 'FloEnvy & GrowLink',
      period2020Present: '2020 - 至今',
      floenvyDescription: '美国智慧农业科技公司FloEnvy和GrowLink的IC（Independent Contractor），负责UI/UX设计及Web端软件开发工作，完成FloEnvy公司网站的升级和部署，FloEnvy Dashboard软件多个功能的开发。完成Growlink公司网站及Hubspot模板的的全新重构和开发。',
      flyingFishSonar: '飞鱼的声纳',
      period20142020: '2014 - 2020',
      flyingFishDescription: '专注于飞鱼的声纳个人博客的开发和维护，内容以IT前沿资讯为主，已经持续运营了8年，保持每周更新3-4篇的频率。',
      hanXuesongStarLion: '韩雪松 & 星狮创想',
      period20102014: '2010 - 2014',
      designLearningDescription: '学习UI设计，师从韩雪冬，之后在星狮创想进行培训，获得当期优秀学员荣誉，创建个人博客《飞鱼的声纳》。',
      
      // 联系信息
      wechat: '微信',
      xian: '西安',
      
      // 通用
      footer: 'Copyright © 2025 MantaApp. 保留所有权利。'
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
