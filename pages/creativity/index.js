// pages/creativity/index.js
import React from 'react';
import Head from 'next/head';
import CategoryCard from '../../components/CategoryCard';
import Link from 'next/link';
import styles from '../health/Category.module.css';
import { creativitySubcategories, creativityCreativePrompts } from '../../data/creativityData';

const Creativity = () => {
  return (
    <>
      <Head>
        <title>Creativity - Creative Care Package</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Creativity</h1>
        <p className={styles.description}>
          Resources and prompts to inspire creativity during the pandemic.
        </p>
        <section className={styles.subcategoryGrid}>
          {creativitySubcategories.map((subcategory) => (
            <Link key={subcategory.id} href={`/creativity/${subcategory.id}`} passHref>
              <CategoryCard
                title={subcategory.title}
                description={subcategory.description}
                icon={subcategory.icon}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/creativity/${subcategory.id}`;
                }}
              />
            </Link>
          ))}
        </section>
        <section className={styles.creativePrompts}>
          <h2>Creative Prompts</h2>
          <ul>
            {creativityCreativePrompts.map((prompt) => (
              <li key={prompt.id}>{prompt.prompt}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Creativity;
