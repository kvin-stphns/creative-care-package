// components/CategoryCard.js
import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CategoryCard = ({ title, imageUrl, description, onClick }) => {
  return (
    <Card className="category-card" onClick={onClick} sx={{ minWidth: 275, maxWidth: 345, m: 1 }}>
      <CardContent>
        <Image src={imageUrl} alt={title} width={100} height={100} /> {/* Update width and height accordingly */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
