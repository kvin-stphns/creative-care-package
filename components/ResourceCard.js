// components/ResourceCard.js
import React from 'react';
import ResourceTag from './ResourceTag'; // Add this import
import styles from './ResourceCard.module.css';

const ResourceCard = ({ resource }) => {
  const { title, description, url, imageUrl, tags } = resource;

  return (
    <div className={styles.resourceCard}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <ResourceTag key={index} tag={tag} />
          ))}
        </div>
      )}
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default ResourceCard;
