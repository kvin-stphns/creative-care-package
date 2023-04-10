// components/CategoryCard.js
import React from 'react';
import Image from 'next/image';

const CategoryCard = ({ title, imageUrl, description, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <Image src={imageUrl} alt={title} width={100} height={100} /> {/* Update width and height accordingly */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
