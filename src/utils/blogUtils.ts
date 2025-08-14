// 博客工具函数

// 检查是否有新博客文章
export const hasNewBlogPosts = (): boolean => {
  // 这里可以根据实际需求实现逻辑
  // 例如：检查本地存储、API调用、配置文件等
  
  // 示例：从本地存储读取状态
  const newBlogPosts = localStorage.getItem('newBlogPosts');
  return newBlogPosts === 'true';
};

// 设置新博客文章状态
export const setNewBlogPosts = (hasNew: boolean): void => {
  localStorage.setItem('newBlogPosts', hasNew.toString());
};

// 清除新博客文章提示（当用户访问博客页面时调用）
export const clearNewBlogPosts = (): void => {
  localStorage.setItem('newBlogPosts', 'false');
};

// 示例：检查博客文章日期来判断是否有新文章
export const checkForNewBlogPosts = (): boolean => {
  // 这里可以实现更复杂的逻辑
  // 例如：比较最后访问时间和最新博客文章发布时间
  
  const lastVisitTime = localStorage.getItem('lastBlogVisit');
  const currentTime = new Date().getTime();
  
  // 示例：如果超过7天没有访问，认为有新文章
  if (!lastVisitTime || (currentTime - parseInt(lastVisitTime)) > 7 * 24 * 60 * 60 * 1000) {
    return true;
  }
  
  return false;
};

// 示例：模拟有新博客文章（用于测试）
export const simulateNewBlogPost = (): void => {
  setNewBlogPosts(true);
  console.log('新博客文章提示已激活');
};

// 示例：模拟清除新博客文章提示
export const simulateClearNewBlogPost = (): void => {
  clearNewBlogPosts();
  console.log('新博客文章提示已清除');
};
