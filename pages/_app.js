import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import layoutStyles from '@/styles/layout.module.css';
import contentStyles from '@/styles/content.module.css';
import dynamic from 'next/dynamic';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// const UserProvider = dynamic(() => import('@auth0/nextjs-auth0').then(mod => mod.UserProvider), {
//   ssr: false,
// });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default MyApp;


