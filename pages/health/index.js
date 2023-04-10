import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import Link from 'next/link';
import styles from './Category.module.css';

const healthSubcategories = [
    {
      id: 'mental-health',
      title: 'Mental Health',
      description: 'Resources for mental health and well-being',
      icon: '/images/mental-health-icon.svg',
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
            {healthSubcategories.map((subcategory) => (
                <Link key={subcategory.id} href={`/health/${subcategory.id}`} passHref>
                    <a>
                        <CategoryCard
                        title={subcategory.title}
                        description={subcategory.description}
                        icon={subcategory.icon}
                        />
                    </a>
                    </Link>
                ))}
                </section>
        </main>
      </>
    );
  };
  
  export default Health;
  