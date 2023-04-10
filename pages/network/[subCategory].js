// pages/network/[subCategory].js
import React from 'react';
import { useState, useEffect } from 'react';
import ResourceCard from '../../components/ResourceCard';
import { networkSubcategories, networkResources } from '../../data/networkData';
import styles from './Category.module.css';

function NetworkSubCategoryPage({ networkSubCategory }) {
  const [subCategoryDetails, setSubCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = networkSubcategories.find((sub) => sub.id === networkSubCategory);
        setSubCategoryDetails(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [networkSubCategory]);

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

          <div className={styles.resourceGrid}>
            {networkResources[networkSubCategory].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NetworkSubCategoryPage;

export async function getStaticProps({ params }) {
  const networkSubCategory = params.subCategory;
  const subCategoryDetails = networkSubcategories.find((sub) => sub.id === networkSubCategory);
  const subCategoryResources = networkResources[networkSubCategory] || [];

  if (!subCategoryDetails) {
    console.error(`No subcategory details found for '${networkSubCategory}'`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      networkSubCategory,
      subCategoryDetails,
      subCategoryResources,
    },
  };
}

export async function getStaticPaths() {
 
  const paths = networkSubcategories.map((subcategory) => ({
    params: { subCategory: subcategory.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
