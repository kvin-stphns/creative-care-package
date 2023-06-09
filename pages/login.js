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
  </p>
  <button onClick={handleLogin} className='button'>unpack</button>
</div>
            <div className="bottom">
              <ol>
                <li>
                <strong>Click &quot;unpack&quot;-</strong>
                  <br />
                  launch our web-app to explore the care package interface
                </li>
                <li>
                <strong>Choose a section-</strong>
                  <br />
                  select one of our 4 sections, health, information, creativity,
                  community
                </li>
                <li>
                <strong>Select a category-</strong>
                  <br />
                  select one of our many categories that will lead you to
                  relevant resources
                </li>
                <li>
                <strong> Medicate-</strong>
                  <br />
                  browse our catalog of resources to heal, learn, and grow. Most
                  of them are free!
                </li>
              </ol>
              <button onClick={handleLogin} className='button-mobile'>unpack</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
  .modal {
    position: fixed;
    z-index: 1000; // Increase z-index to avoid being cut off by header/footer
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
    padding: 40px;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: row; // Change to row to arrange left-side and right-side horizontally
    gap: 20px;
    flex-wrap: wrap; // Wrap the content to fit on small screens
    border-radius: 15px;
  }
  .left-side,
  .right-side {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .left-side {
    align-items: flex-start;
    flex: 1;
  }
  .right-side {
    align-items: flex-end;
    flex: 1;
    margin-top: 60px;
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between; // Arrange the list items horizontally
    flex-wrap: wrap; // Wrap the list items on small screens
  }
  .bottom ol {
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; // Wrap the list items on small screens
  }
  .bottom li {
    margin-bottom: 10px;
    margin: 4px;
    flex: 1;
    font-size: 12px;
  }
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    width: 100%;
    display: block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 24px;
  }
  .button-mobile {
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: none;
    visibility: hidden
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    padding: 8px 24px;
  }
  h1 {
    font-size: 50px;
    line-height: 100%;
  }
  h2 {
    margin-bottom: -30px;
    padding: -20;
    line-height 70%;
  }
  p {
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .left-side {
      margin-top: -35px;
    }
    h1 {
      font-size: 40px;
      line-height: 100%;
    }
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 35px;
      border: 1px solid #888;
      width: 80%;
      display: flex;
      flex-direction: column; // Change to row to arrange left-side and right-side horizontally
      gap: 20px;
      flex-wrap: wrap; // Wrap the content to fit on small screens
      border-radius: 15px;
    }
    .right-side {
      align-items: flex-end;
      flex: 1;
      margin-top: -40px;
  }
  .bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -30px;
    margin-bottom: -10px;
}
ol {
  flex-direction: column;
display: block;
}
.button-mobile {
  background-color: #4caf50;
  width: 100%;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 24px;
}
.button{
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: none;
  visibility: hidden;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 24px;
}
}

`}</style>

        </div>
        );
        };
        
        export default LoginPage;
