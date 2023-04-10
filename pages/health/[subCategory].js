import React from 'react';
import { useState, useEffect } from 'react';
import ResourceCard from '../../components/ResourceCard';
import CreativePrompt from '../../components/CreativePrompt';
import { healthSubcategories, healthResources, healthCreativePrompts } from '../../data/healthData';
import styles from './Category.module.css';

function SubCategoryPage({ subCategory }) {
  const [subCategoryDetails, setSubCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = healthSubcategories.find((sub) => sub.id === subCategory);
        setSubCategoryDetails(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [subCategory]);

  return (
    <div className={styles.subCategoryPage}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Failed to load data. Please try again.</p>
      ) : (
        <>
          <h1>{subCategoryDetails.title}</h1>
          <p>{subCategoryDetails.description}</p>
          {subCategory === 'creativity' && <CreativePrompt prompts={healthCreativePrompts} />}

          <div className={styles.resourceGrid}>
            {healthResources[subCategory].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SubCategoryPage;

export async function getStaticProps({ params }) {
  const subCategory = params.subCategory;
  const subCategoryDetails = healthSubcategories.find((sub) => sub.id === subCategory);
  const subCategoryResources = healthResources[subCategory] || [];

  if (!subCategoryDetails) {
    console.error(`No subcategory details found for '${subCategory}'`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      subCategory,
      subCategoryDetails,
      subCategoryResources,
    },
  };
}

export async function getStaticPaths() {
  if (!healthSubcategories) {
    console.error('healthSubcategories is not defined');
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = healthSubcategories.map((subCategory) => ({
    params: { subCategory: subCategory.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
