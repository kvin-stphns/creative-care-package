import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import styles from './Category.module.css';

const healthSubcategories = [
    {
      title: 'Mental Health',
      description: 'Resources for mental health and well-being',
      icon: '/images/mental-health-icon.svg',
      link: '/health/mental-health',
    },
    // Add more subcategories as needed
  ];
  


const Health = () => {
    return (
      <>
        <Head>
          <title>Health - Creative Care Package</title>
        </Head>
        <main className={styles.container}>
          <h1 className={styles.title}>Health</h1>
          <p className={styles.description}>
            Resources to support your physical and mental well-being during the pandemic.
          </p>
          <section className={styles.subcategoryGrid}>
            {healthSubcategories.map((subcategory, index) => (
              <CategoryCard
                key={index}
                title={subcategory.title}
                description={subcategory.description}
                icon={subcategory.icon}
                link={subcategory.link}
              />
            ))}
          </section>
        </main>
      </>
    );
  };
  
  export default Health;
  