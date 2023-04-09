import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1>App Logo</h1>
      <nav>
        <Link href="/health">Health</Link>
        <Link href="/informative">Informative</Link>
        <Link href="/creativity">Creativity</Link>
        <Link href="/network">Network</Link>
      </nav>
    </header>
  );
}

export default Header;