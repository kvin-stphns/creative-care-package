import Link from 'next/link';
import styles from './Header.module.css';

// function Header() {
//   return (
//     <header>
//       <h1>App Logo</h1>
//       <nav>
//         <Link href="/health">Health</Link>
//         <Link href="/informative">Informative</Link>
//         <Link href="/creativity">Creativity</Link>
//         <Link href="/network">Network</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

const Header = () => {
    return (
      <header className={styles.header}>
        {/* App logo */}
        <div className={styles.logo}>
          <img src="/path/to/logo.png" alt="Creative Care Package Logo" />
        </div>
  
        {/* Navigation */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="/health">Health</a></li>
            <li><a href="/informative">Informative</a></li>
            <li><a href="/creativity">Creativity</a></li>
            <li><a href="/network">Network</a></li>
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
  