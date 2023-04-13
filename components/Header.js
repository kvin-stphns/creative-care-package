import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {
  const { user, isLoading } = useUser();

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
      {/* Add Login/Logout */}
    <div className={styles.login}>
      {!isLoading &&
        (user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/login">Login</Link>
        ))}
    </div>
    </header>
  );
}

export default Header;
