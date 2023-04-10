import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ResourceTag from './ResourceTag'; // Add this import
import styles from './ResourceCard.module.css';

const ResourceCard = ({ resource }) => {
  const { title, description, url, imageUrl, tags } = resource;

  return (
    <div className={styles.resourceCard}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt={title}
        width={150} // Add the desired width
        height={100} // Add the desired height
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <ResourceTag key={index} tag={tag} />
          ))}
        </div>
      )}
      <Link href={url} passHref legacyBehavior>
        <a className={styles.link} target="_blank" rel="noreferrer">
          Learn More
        </a>
      </Link>
    </div>
  );
};

export default ResourceCard;
