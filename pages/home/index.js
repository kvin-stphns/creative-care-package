import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmailSubmitted(true);
    } else {
      setShowForm(true);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      'https://mapso.us1.list-manage.com/subscribe/post-json?u=a098266c32a75be124a6a996c&id=8e805263a7&c=?';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      const { msg, result } = data;
      if (result === 'success') {
        localStorage.setItem('email', email);
        setEmailSubmitted(true);
        setShowForm(false);
      } else {
        alert(msg);
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.gif}>
        <Image
          src="/images/covid-theme.gif"
          alt="COVID-themed GIF"
          width={500}
          height={300}
        />
      </div>

      <h1 className={styles.title}>Creative Care Package</h1>

      {showForm && (
        <form onSubmit={onSubmit} className={styles.emailSignIn}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.signInBtn}>
            Sign in
          </button>
        </form>
      )}

      <div className={styles.categories}>
        <Link href="/health" passHref legacyBehavior>
          <a className={styles.category}>
            <Image
              src="/images/health-icon.png"
              alt="Health"
              width={100}
              height={100}
            />
            <h3>Health</h3>
          </a>
        </Link>

        <Link href="/informative" passHref legacyBehavior>
          <a className={styles.category}>
            <Image
              src="/images/informative-icon.png"
              alt="Informative"
              width={100}
              height={100}
            />
            <h3>Informative</h3>
          </a>
        </Link>

        <Link href="/creativity" passHref legacyBehavior>
          <a className={styles.category}>
            <Image
              src="/images/creativity-icon.png"
              alt="Creativity"
              width={100}
              height={100}
            />
            <h3>Creativity</h3>
          </a>
        </Link>

        <Link href="/network" passHref legacyBehavior>
          <a className={styles.category}>
            <Image
              src="/images/network-icon.png"
              alt="Network"
              width={100}
              height={100}
            />
            <h3>Network</h3>
          </a>
        </Link>
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

