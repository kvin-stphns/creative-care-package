// import '@/styles/globals.css';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../theme';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Header />
//       <main>
//         <Component {...pageProps} />
//       </main>
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import styles from '@/styles/layout.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
