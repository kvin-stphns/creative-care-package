// pages/informative/index.js
import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import Link from 'next/link';
import styles from './Category.module.css';
import { informativeSubcategories } from '../../data/informativeData';

const Informative = () => {
  return (
    <>
      <Head>
        <title>Informative - Creative Care Package</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Informative</h1>
        <p className={styles.description}>
          Resources to keep you informed and support your personal growth during the pandemic.
        </p>
        <section className={styles.subcategoryGrid}>
          {informativeSubcategories.map((subcategory) => (
            <Link key={subcategory.id} href={`/informative/${subcategory.id}`} passHref>
              <CategoryCard
                title={subcategory.title}
                description={subcategory.description}
                icon={subcategory.icon}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/informative/${subcategory.id}`;
                }}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Informative;
