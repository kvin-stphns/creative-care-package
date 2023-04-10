import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import Link from 'next/link';
import styles from './Category.module.css';
import { healthSubcategories } from '../../data/healthData'; // Import healthSubcategories from healthData.js

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
              <CategoryCard
                title={subcategory.title}
                description={subcategory.description}
                icon={subcategory.icon}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Health;
