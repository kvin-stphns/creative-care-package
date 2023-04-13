import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HandleCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { access_token, id_token, expires_in } = router.asPath
        .split('#')[1]
        .split('&')
        .reduce((acc, item) => {
          const [key, value] = item.split('=');
          acc[key] = value;
          return acc;
        }, {});

      // Save tokens and expiration time to local storage or cookies
      // ...

      // Redirect to the desired page after successful authentication
      router.push('/home');
    };

    handleAuthCallback();
  }, [router]);

  return <div>Handling authentication callback...</div>;
};

export default HandleCallback;
