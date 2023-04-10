// components/ResourceTag.js
import React from 'react';
import styles from './ResourceTag.module.css';

function ResourceTag({ tag }) {
  return (
    <span className={styles.resourceTag}>
      {tag}
    </span>
  );
}

export default ResourceTag;
