import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from './home';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      router.replace('/home');
    }
  }, []);

  return <Home />;
};

export default Index;
