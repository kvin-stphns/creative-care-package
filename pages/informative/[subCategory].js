// pages/informative/[subCategory].js
import React from 'react';
import { useRouter } from 'next/router';
import ResourceCard from '../../components/ResourceCard';
import { informativeSubcategories, informativeResources } from '../../data/informativeData';
import styles from './Category.module.css';

function InformativeSubCategoryPage({ resources }) {
  const router = useRouter();
  const subcategory = informativeSubcategories.find((sub) => sub.id === router.query.subCategory);

  if (!subcategory) {
    return <p>Subcategory not found</p>;
  }

  return (
    <div className={styles.subCategoryPage}>
      <h1>{subcategory.title}</h1>
      <p>{subcategory.description}</p>

      <div className={styles.resourceGrid}>
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const resources = informativeResources[params.subCategory] || [];

  return {
    props: {
      resources,
    },
  };
}

export async function getStaticPaths() {
  const paths = informativeSubcategories.map((subcategory) => ({
    params: { subCategory: subcategory.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default InformativeSubCategoryPage;
