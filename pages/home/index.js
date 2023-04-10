import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmailSubmitted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    setEmailSubmitted(true);
  };

  if (emailSubmitted) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.gif}>
        <img src="/images/covid-theme.gif" alt="COVID-themed GIF" />
      </div>

      <h1 className={styles.title}>Creative Care Package</h1>

      <form onSubmit={handleSubmit} className={styles.emailSignIn}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={styles.signInBtn}>
          Sign in
        </button>
      </form>

      <div className={styles.categories}>
        <a href="/health" className={styles.category}>
          <img src="/images/health-icon.png" alt="Health" />
          <h3>Health</h3>
        </a>

        <a href="/informative" className={styles.category}>
          <img src="/images/informative-icon.png" alt="Informative" />
          <h3>Informative</h3>
        </a>

        <a href="/creativity" className={styles.category}>
          <img src="/images/creativity-icon.png" alt="Creativity" />
          <h3>Creativity</h3>
        </a>

        <a href="/network" className={styles.category}>
          <img src="/images/network-icon.png" alt="Network" />
          <h3>Network</h3>
        </a>
      </div>

      <div className={styles.popOut}>
        <p>
          Creative Care Package is an app that provides resources to help you stay informed, healthy, and connected during the COVID-19 pandemic. Explore the categories to discover valuable information, creative prompts, and support networks.
        </p>
      </div>
    </div>
  );
};

export default Home;
