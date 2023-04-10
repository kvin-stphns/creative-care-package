// pages/informative/index.js
import React from 'react';
import CategoryCard from '../../components/CategoryCard';
import styles from './Category.module.css';
import { informativeCategories } from '../../data/informativeData';

function Informative() {
  return (
    <div className={styles.categoryPage}>
      <h1>Informative</h1>
      <div className={styles.categoryGrid}>
        {informativeCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Informative;
