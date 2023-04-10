// components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ title, imageUrl, description, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
