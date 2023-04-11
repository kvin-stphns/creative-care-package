// pages/creativity/subCategory.js
import React from 'react';
import { useState, useEffect } from 'react';
import ResourceCard from '../../components/ResourceCard';
import CreativePrompt from '../../components/CreativePrompt';
import { creativitySubcategories, creativityResources, creativityCreativePrompts } from '../../data/creativityData';
import styles from '../health/Category.module.css';
import ProtectedRoute from '@/components/ProtectedRoute';

function CreativitySubCategoryPage({ creativitySubCategory }) {
  const [subCategoryDetails, setSubCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = creativitySubcategories.find((sub) => sub.id === creativitySubCategory);
        setSubCategoryDetails(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [creativitySubCategory]);

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
          {creativitySubCategory === 'creativity' && <CreativePrompt prompts={creativityCreativePrompts} />}

          <div className={styles.resourceGrid}>
            {creativityResources[creativitySubCategory].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </>
      )}
    </div>
    </ProtectedRoute>
  );
}

export default CreativitySubCategoryPage;

export async function getStaticProps({ params }) {
  const creativitySubCategory = params.subCategory;
  const subCategoryDetails =
  creativitySubcategories.find((sub) => sub.id === creativitySubCategory);

  if (!subCategoryDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      creativitySubCategory,
    },
  };
}

export async function getStaticPaths() {
  const paths = creativitySubcategories.map((subcategory) => ({
    params: { subCategory: subcategory.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
