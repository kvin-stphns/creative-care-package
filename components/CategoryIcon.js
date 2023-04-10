// components/CategoryIcon.js
import Link from 'next/link';
import Image from 'next/image';

function CategoryIcon({ category }) {
  return (
    <Link href={`/${category}`} className="category-icon" legacyBehavior>
      <a>
        <Image src={`/images/${category}.png`} alt={category} width={100} height={100} /> {/* Update width and height accordingly */}
        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      </a>
    </Link>
  );
}

export default CategoryIcon;
