import React, { useState } from 'react';
import styles from './CreativePrompt.module.css';

const CreativePrompt = ({ prompts }) => {
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  const changePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  return (
    <div className={styles.promptContainer}>
      <h3 className={styles.prompt}>{currentPrompt}</h3>
      <button className={styles.changePromptButton} onClick={changePrompt}>
        Get Another Prompt
      </button>
    </div>
  );
};

export default CreativePrompt;
