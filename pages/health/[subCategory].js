import React from 'react';
import { useRouter } from 'next/router';
import ResourceCard from '../../components/ResourceCard';
import CreativePrompt from '../../components/CreativePrompt';
import { healthSubCategoryData as subCategoryData, healthResources as resources, healthCreativePrompts as creativePrompts } from '../../data/healthData';
import styles from './Category.module.css';

const SubCategoryPage = () => {
  const router = useRouter();
  const { subCategory } = router.query;

  // Return a loading indicator or null if subCategory is not available
  if (!subCategory) {
    return <div>Loading...</div>;
  }

  const subCategoryDetails = subCategoryData[subCategory];

  // Return an error message if subCategoryDetails is not found
  if (!subCategoryDetails) {
    return <div>Error: Subcategory not found</div>;
  }

  const subCategoryResources = resources[subCategory];
  const subCategoryCreativePrompts = creativePrompts[subCategory];

  return (
    <div className={styles.subCategoryPage}>
      <h1>{subCategoryDetails.title}</h1>
      <p>{subCategoryDetails.description}</p>

      {subCategory === 'creativity' && <CreativePrompt prompts={subCategoryCreativePrompts} />}

      <div className={styles.resourceGrid}>
        {subCategoryResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
