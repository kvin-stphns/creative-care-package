import { MongoClient } from 'mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db(process.env.MONGODB_DB);
    await db.collection('users').insertOne({ email });
    client.close();

    res.status(200).json({ message: 'User data stored successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
