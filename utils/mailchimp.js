import Mailchimp from "mailchimp-api-v3";

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export default async function subscribeUserToMailchimp(email) {
  try {
    await mailchimp.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      email_address: email,
      status: "subscribed",
    });
  } catch (error) {
    console.error("Error subscribing user to Mailchimp:", error);
  }
}
