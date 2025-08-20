import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

interface PageTransitionProps {
  children?: React.ReactNode;
  isTransitioning?: boolean;
  onTransitionComplete?: () => void;
}

export default function PageTransition({ 
  children, 
  isTransitioning = false, 
  onTransitionComplete 
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isTransitioning) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        if (onTransitionComplete) {
          onTransitionComplete();
        }
      }, 300); // 与CSS动画时长匹配
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isTransitioning, onTransitionComplete]);

  return (
    <div className={`${styles.pageTransition} ${isVisible ? styles.visible : styles.hidden}`}>
      {children}
    </div>
  );
}
