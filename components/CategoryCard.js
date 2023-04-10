import React from 'react';

const CategoryCard = React.forwardRef(({ title, imageUrl, description }, ref) => {
  return (
    <div className="category-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" ref={ref} style={{ display: 'none' }}></a>
    </div>
  );
});

export default CategoryCard;
