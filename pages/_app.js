import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import layoutStyles from '@/styles/layout.module.css';
import contentStyles from '@/styles/content.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={layoutStyles.container}>
        <Header />
        <main className={`${layoutStyles.main} ${contentStyles.content}`}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
