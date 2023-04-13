import React, { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.auth0.com/js/lock/12.0.2/lock.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showLock = () => {
    if (typeof window !== 'undefined' && window.Auth0Lock) {
      const lock = new window.Auth0Lock(process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID, process.env.NEXT_PUBLIC_AUTH0_DOMAIN, {
        auth: {
          redirectUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
          responseType: 'token id_token',
          params: {
            scope: 'openid email profile',
          },
        },
        additionalSignUpFields: [
          {
            name: 'first_name',
            placeholder: 'First Name',
          },
          {
            name: 'last_name',
            placeholder: 'Last Name',
          },
        ],
      });

      lock.on('authenticated', function (authResult) {
        lock.getUserInfo(authResult.accessToken, function (error, profile) {
          if (error) {
            // Handle error
            return;
          }

          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));
        });
      });

      lock.show();
    }
  };

  return (
    <div>
      <h1>Login / Signup</h1>
      <button onClick={showLock}>Login / Signup</button>
    </div>
  );
};

export default LoginPage;
