import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './index.module.css';

interface AnimatedLinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedLink({ 
  to, 
  children, 
  className = '', 
  onClick 
}: AnimatedLinkProps) {
  const history = useHistory();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    // 开始动画
    setIsAnimating(true);
    
    // 延迟导航，让动画有时间播放
    setTimeout(() => {
      history.push(to);
    }, 300);
  };

  return (
    <a 
      href={to} 
      onClick={handleClick}
      className={`${styles.animatedLink} ${className} ${isAnimating ? styles.animating : ''}`}
    >
      {children}
    </a>
  );
}
