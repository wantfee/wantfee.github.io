import React from 'react';
import styles from './index.module.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = '#ee6c4d' 
}: LoadingSpinnerProps) {
  return (
    <div className={`${styles.spinner} ${styles[size]}`} style={{ borderTopColor: color }}>
      <div className={styles.inner}></div>
    </div>
  );
}
