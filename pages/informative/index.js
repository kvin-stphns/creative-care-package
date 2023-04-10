// pages/informative/index.js
import React from 'react';
import Link from 'next/link';
import styles from './Category.module.css';
import { informativeSubcategories } from '../../data/informativeData';

function Informative() {
  return (
    <div className={styles.categoryPage}>
      <h1>Informative</h1>
      <div className={styles.subcategoryGrid}>
        {informativeSubcategories.map((subcategory) => (
          <div key={subcategory.id} className={styles.subcategoryCard}>
            <Link href={`/informative/${subcategory.id}`}>

              <h3>{subcategory.title}</h3>
              <p>{subcategory.description}</p>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Informative;
