import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { serverApi: { version: '1' } });

try {
  await client.connect();
  const admin = client.db().admin();
  const info = await admin.serverStatus();
  console.log('OK');
  console.log(info.version);
} catch (err) {
  console.error('ERR', err);
} finally {
  await client.close();
}
