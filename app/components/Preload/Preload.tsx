"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import styles from "./Preload.module.css";

export default function Preload() {
  const { isLoading, isPreloadComplete, completePreload } = useAppStore();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            completePreload();
          }, 800);
        }, 400);
      }
      setProgress(Math.min(current, 100));
    }, 150);

    return () => clearInterval(interval);
  }, [completePreload]);

  if (isPreloadComplete) return null;

  return (
    <div
      className={`${styles.preload} ${isExiting ? styles.exit : ""}`}
      aria-hidden={!isLoading}
    >
      <div className={styles.content}>
        <h1 className={styles.logo}>Fiony</h1>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.percentage}>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}