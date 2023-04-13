import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

const options = {
  async callback(req, res) {
    try {
      await handleCallback(req, res);
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
};

export default handleAuth(options);
