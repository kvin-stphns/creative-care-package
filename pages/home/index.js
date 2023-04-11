import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import Link from 'next/link';
import Image from 'next/image';
import CategoryCard from '../../components/CategoryCard'; // Import CategoryCard component
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
      {/* (keep the existing code for the gif, title, and form) */}

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

<section className={styles.homeSubcategoryGrid}>
      <div className={styles.categories}>
        <Link href="/health" passHref legacyBehavior>
          <CategoryCard
            title="Health"
            imageUrl="/images/health-icon.png"
            description=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/health';
            }}
          />
        </Link>

        <Link href="/informative" passHref legacyBehavior>
          <CategoryCard
            title="Informative"
            imageUrl="/images/informative-icon.png"
            description=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/informative';
            }}
          />
        </Link>

        <Link href="/creativity" passHref legacyBehavior>
          <CategoryCard
            title="Creativity"
            imageUrl="/images/creativity-icon.png"
            description=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/creativity';
            }} 
          />
        </Link>

        <Link href="/network" passHref legacyBehavior>
          <CategoryCard
            title="Network"
            imageUrl="/images/network-icon.png"
            description=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/network';
            }}
          />
        </Link>
      </div>
      </section>

      <div className={styles.popOut}>
        <p>
          Creative Care Package is an app that provides resources to help you stay informed, healthy, and connected during the COVID-19 pandemic. Explore the categories to discover valuable information, creative prompts, and support networks.
        </p>
      </div>
    </div>
  );
};

export default Home;

