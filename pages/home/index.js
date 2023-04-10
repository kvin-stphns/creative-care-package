import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* COVID-themed GIF */}
      <div className={styles.gif}>
        <img src="/images/covid-theme.gif" alt="COVID-themed GIF" />
      </div>

      {/* App title */}
      <h1 className={styles.title}>Creative Care Package</h1>

      {/* Email input and sign-in */}
      <div className={styles.emailSignIn}>
        <input type="email" placeholder="Enter your email" className={styles.emailInput} />
        <button className={styles.signInBtn}>Sign in</button>
      </div>

      {/* Main category icons */}
      <div className={styles.categories}>
        {/* Health */}
        <a href="/health" className={styles.category}>
          <img src="/images/health-icon.png" alt="Health" />
          <h3>Health</h3>
        </a>

        {/* Informative */}
        <a href="/informative" className={styles.category}>
          <img src="/images/informative-icon.png" alt="Informative" />
          <h3>Informative</h3>
        </a>

        {/* Creativity */}
        <a href="/creativity" className={styles.category}>
          <img src="/images/creativity-icon.png" alt="Creativity" />
          <h3>Creativity</h3>
        </a>

        {/* Network */}
        <a href="/network" className={styles.category}>
          <img src="/images/network-icon.png" alt="Network" />
          <h3>Network</h3>
        </a>
      </div>

      {/* Pop-out explanation text */}
      <div className={styles.popOut}>
        <p>
          Creative Care Package is an app that provides resources to help you stay informed, healthy, and connected during the COVID-19 pandemic. Explore the categories to discover valuable information, creative prompts, and support networks.
        </p>
      </div>
    </div>
  );
}

export default Home;

  