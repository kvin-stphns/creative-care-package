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

import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0';

const saveUserMetadata = async (user, context) => {
  const { firstName, lastName } = context.request.body;

  if (firstName && lastName) {
    const namespace = 'https://myapp.example.com/';
    user.app_metadata = user.app_metadata || {};
    user.app_metadata[namespace + 'first_name'] = firstName;
    user.app_metadata[namespace + 'last_name'] = lastName;
    await context.auth0.updateAppMetadata(user.user_id, user.app_metadata);
  }

  return user;
};

const options = {
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          response_type: 'code id_token',
          scope: 'openid email profile',
          state: req.query.state,
        },
        afterCallback: saveUserMetadata,
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        afterCallback: async (req, res, session) => {
          return {
            ...session,
            user: {
              ...session.user,
              id_token: req.oidc.id_token.__raw,
            },
          };
        },
      });
    } catch (error) {
      res.status(error.status || 500).end(error.message).redirect('/');
    }
  },
};

export default handleAuth(options);

