// import { handleAuth } from '@auth0/nextjs-auth0';

// export default handleAuth();


// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// const saveUserMetadata = async (user, context) => {
//   const { firstName, lastName } = context.request.body;

//   if (firstName && lastName) {
//     const namespace = 'https://myapp.example.com/';
//     user.app_metadata = user.app_metadata || {};
//     user.app_metadata[namespace + 'first_name'] = firstName;
//     user.app_metadata[namespace + 'last_name'] = lastName;
//     await context.auth0.updateAppMetadata(user.user_id, user.app_metadata);
//   }

//   return user;
// };

// export default handleAuth({
//   async login(req, res) {
//     try {
//       await handleLogin(req, res, {
//         authorizationParams: {
//           response_type: 'code id_token',
//           scope: 'openid email profile',
//         },
//         afterCallback: saveUserMetadata,
//       });
//     } catch (error) {
//       res.status(error.status || 400).end(error.message);
//     }
//   },
// });

import { handleAuth, handleLogin, handleCallback, handleLogout, getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/'
};

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          scope: 'openid profile email'
        },
        returnTo: '/home',
        refetch: true
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        onUserLoaded: async (req, res, session, state) => {
          console.log('User loaded:', session.user);
          res.setHeader('Set-Cookie', cookie.serialize('state', state, cookieOptions));
          return session;
        }
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  async logout(req, res) {
    try {
      await handleLogout(req, res, {
        returnTo: '/'
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  async session(req, res) {
    try {
      const session = await getSession(req, res);
      res.setHeader('Set-Cookie', cookie.serialize('session', session, cookieOptions));
      res.status(200).json(session);
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});
