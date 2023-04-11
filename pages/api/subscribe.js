// pages/api/subscribe.js
// import Mailchimp from 'mailchimp-api-v3';

// const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

// export default async function handler(req, res) {
//   const { email } = req.body;

//   if (!email) {
//     res.status(400).json({ error: 'Email is required' });
//     return;
//   }

//   try {
//     await mailchimp.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
//       email_address: email,
//       status: 'subscribed',
//     });
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error subscribing user to Mailchimp:', error);
//     res.status(500).json({ error: 'Failed to subscribe user to Mailchimp' });
//   }
// }

import Mailchimp from 'mailchimp-api-v3';

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  try {
    // Check if the user is already subscribed
    const response = await mailchimp.get(`/lists/${process.env.MAILCHIMP_LIST_ID}/members/${email}`);
    
    if (response.status === 'subscribed') {
      res.status(200).json({ success: true });
      return;
    }
  } catch (error) {
    // Ignore "not found" errors
    if (error.status !== 404) {
      console.error('Error checking user subscription status in Mailchimp:', error);
      res.status(500).json({ error: 'Failed to check user subscription status in Mailchimp' });
      return;
    }
  }

  try {
    await mailchimp.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed',
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error subscribing user to Mailchimp:', error);
    res.status(500).json({ error: 'Failed to subscribe user to Mailchimp' });
  }
}

