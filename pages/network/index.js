// pages/network/index.js
import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import Link from 'next/link';
import styles from './Category.module.css';
import { networkSubcategories } from '../../data/networkData';

const Network = () => {
  return (
    <>
      <Head>
        <title>Network - Creative Care Package</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Network</h1>
        <p className={styles.description}>
          Connect with others, share experiences, and find support during the pandemic.
        </p>
        <section className={styles.subcategoryGrid}>
          {networkSubcategories.map((subcategory) => (
            <Link key={subcategory.id} href={`/network/${subcategory.id}`} passHref>
              <CategoryCard
                title={subcategory.title}
                description={subcategory.description}
                icon={subcategory.icon}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/network/${subcategory.id}`;
                }}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Network;
