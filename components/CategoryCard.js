import React from 'react';

const CategoryCard = ({ title, imageUrl, description }) => {
  return (
    <div className="category-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
