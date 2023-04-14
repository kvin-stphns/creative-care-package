// import React, { useEffect } from 'react';

// const LoginPage = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.auth0.com/js/lock/12.0.2/lock.min.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const showLock = () => {
//     if (typeof window !== 'undefined' && window.Auth0Lock) {
//       const lock = new window.Auth0Lock(process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID, process.env.NEXT_PUBLIC_AUTH0_DOMAIN, {
//         auth: {
//           redirectUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
//           responseType: 'token id_token',
//           params: {
//             scope: 'openid email profile',
//           },
//         },
//         additionalSignUpFields: [
//           {
//             name: 'first_name',
//             placeholder: 'First Name',
//           },
//           {
//             name: 'last_name',
//             placeholder: 'Last Name',
//           },
//         ],
//       });

//       lock.on('authenticated', function (authResult) {
//         lock.getUserInfo(authResult.accessToken, function (error, profile) {
//           if (error) {
//             // Handle error
//             return;
//           }

//           localStorage.setItem('id_token', authResult.idToken);
//           localStorage.setItem('profile', JSON.stringify(profile));
//         });
//       });

//       lock.show();
//     }
//   };

//   return (
//     <div>
//       <h1>Login / Signup</h1>
//       <button onClick={showLock}>Login / Signup</button>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [showModal, setShowModal] = useState(true);

  const handleLogin = () => {
    router.push('/api/auth/login');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Login / Signup</h1>
      {user ? (
        <div>Welcome, {user.name}!</div>
      ) : (
        <button onClick={handleLogin}>Login / Signup</button>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="left-side">
              <h2>Welcome!</h2>
              <h1>Free resources for creative students</h1>
            </div>
            <div className="right-side">
  <p>
    We gathered the best resources across the web just for you! Creative Care
    Package is an app that provides resources to help you stay informed,
    healthy, and connected during the COVID-19 pandemic. Explore the categories
    to discover valuable information, creative prompts, and support networks.
    &quot;unpack&quot; (middle right: long and narrow)
  </p>
  <button onClick={() => setModalVisible(false)}>unpack</button>
</div>
            <div className="bottom">
              <ol>
                <li>
                  Click "unpack"
                  <br />
                  launch our web-app to explore the care package interface
                </li>
                <li>
                  Choose a section
                  <br />
                  select one of our 4 sections, health, information, creativity,
                  community
                </li>
                <li>
                  Select a category
                  <br />
                  select one of our many categories that will lead you to
                  relevant resources
                </li>
                <li>
                  Medicate
                  <br />
                  browse our catalog of resources to heal, learn, and grow. Most
                  of them are free!
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .left-side,
        .right-side {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .left-side {
          align-items: flex-start;
        }
        .right-side {
        align-items: flex-end;
        }
        .bottom {
        width: 100%;
        }
        .bottom ol {
        padding: 0;
        }
        .bottom li {
        margin-bottom: 10px;
        }
        button {
        background-color: #4caf50;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 8px 24px;
        }
        `}</style>
        </div>
        );
        };
        
        export default LoginPage;
