'use client';

import { useEffect } from 'react';
import styles from './InstagramFeed.module.css';

interface InstagramFeedProps {
  widgetId: string;
}

const InstagramFeed = ({ widgetId }: InstagramFeedProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // It's often better to keep the script if other instances might need it,
      // but let's stick to the cleanup for now unless it causes issues.
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.feedWrapper}>
      {/* 
        This is a placeholder for a widget implementation. 
        Example with Elfsight:
      */}
      <div 
        className={`elfsight-app-${widgetId}`} 
        data-elfsight-app-lazy
      ></div>
      
      {!widgetId && (
        <div className={styles.placeholder}>
          <p>Configurez votre Widget ID Instagram pour afficher vos publications ici.</p>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
