import '@/styles/globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Header />
//       <main>
//         <Component {...pageProps} />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default function App({ Component, pageProps }) {
//   return <>
//   <Header />
//   <main>
//     <Component {...pageProps} />
//   </main>
//   <Footer />
// </>
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
