import Link from 'next/link';

function CategoryIcon({ category }) {
  return (
    <Link href={`/${category}`} className="category-icon" legacyBehavior>

        <img src={`/images/${category}.png`} alt={category} />
        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>

      </Link>
  );
}

export default CategoryIcon;