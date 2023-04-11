// pages/informative/[subCategory].js
import React from 'react';
import { useState, useEffect } from 'react';
import ResourceCard from '../../components/ResourceCard';
import { informativeSubcategories, informativeResources } from '../../data/informativeData';
import styles from './Category.module.css';
import ProtectedRoute from '@/components/ProtectedRoute';

function InformativeSubCategoryPage({ informativeSubCategory }) {
  const [subCategoryDetails, setSubCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = informativeSubcategories.find((sub) => sub.id === informativeSubCategory);
        setSubCategoryDetails(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [informativeSubCategory]);

  return (
    <ProtectedRoute>
    <div className={styles.subCategoryPage}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Failed to load data. Please try again.</p>
      ) : (
        <>
          <h1>{subCategoryDetails.title}</h1>
          <p>{subCategoryDetails.description}</p>

          <div className={styles.resourceGrid}>
            {informativeResources[informativeSubCategory].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </>
      )}
    </div>
    </ProtectedRoute>
  );
}

export default InformativeSubCategoryPage;

export async function getStaticProps({ params }) {
  const informativeSubCategory = params.subCategory;
  const subCategoryDetails = informativeSubcategories.find((sub) => sub.id === informativeSubCategory);
  const subCategoryResources = informativeResources[informativeSubCategory] || [];

  if (!subCategoryDetails) {
    console.error(`No subcategory details found for '${informativeSubCategory}'`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      informativeSubCategory,
      subCategoryDetails,
      subCategoryResources,
    },
  };
}

export async function getStaticPaths() {
  if (!informativeSubcategories) {
    console.error('informativeSubcategories is not defined');
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = informativeSubcategories.map((subCategory) => ({
    params: { subCategory: subCategory.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
