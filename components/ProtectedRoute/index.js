// import { useAuth0 } from '@auth0/auth0-react';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import styles from './ProtectedRoute.module.css';

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       loginWithRedirect({ appState: { returnTo: router.asPath } });
//     }
//   }, [isLoading, isAuthenticated, loginWithRedirect, router]);

//   if (isLoading || !isAuthenticated) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './ProtectedRoute.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';


const ProtectedRoute = ({ children }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    } else if (user) {
      // Subscribe the user to Mailchimp using the API route
      fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }),
      });
    }
  }, [isLoading, user, router]);

  if (isLoading || error || !user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

