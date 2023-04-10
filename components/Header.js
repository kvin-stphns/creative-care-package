import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* App logo */}
      <div className={styles.logo}>
        <Image src="/path/to/logo.png" alt="Creative Care Package Logo" width={150} height={50} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/health">
              Health
            </Link>
          </li>
          <li>
            <Link href="/informative">
              Informative
            </Link>
          </li>
          <li>
            <Link href="/creativity">
              Creativity
            </Link>
          </li>
          <li>
            <Link href="/network">
              Network
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search bar */}
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;
