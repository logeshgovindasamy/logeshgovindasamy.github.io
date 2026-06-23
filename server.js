import express from 'express';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fallbackDataPath = path.join(__dirname, 'fallbackData.json');
const fallbackData = JSON.parse(fs.readFileSync(fallbackDataPath, 'utf8'));

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);
let mongoUri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB || 'portfolio';
let collectionName = process.env.MONGODB_COLLECTION || 'portfolio';

const hasPlaceholderUri = mongoUri && /(YOUR_USER|YOUR_PASSWORD|YOUR_CLUSTER)/.test(mongoUri);
let useMongo = Boolean(mongoUri && dbName && !hasPlaceholderUri);
let client;

async function connectMongo() {
  if (useMongo) {
    client = new MongoClient(mongoUri, { serverApi: { version: '1' } });
    try {
      await client.connect();
      console.log('Connected to specified MongoDB');
      return;
    } catch (error) {
      console.warn(`Failed to connect to specified MongoDB: ${error.message}`);
      console.log('Starting local in-memory database for development...');
    }
  }

  // Start in-memory DB if no Mongo URI provided or connection failed
  try {
    const mongod = await MongoMemoryServer.create();
    mongoUri = mongod.getUri();
    client = new MongoClient(mongoUri, { serverApi: { version: '1' } });
    await client.connect();
    useMongo = true;
    console.log('Connected to In-Memory MongoDB');

    // Seed the in-memory database with the fallback data
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertOne(fallbackData);
      console.log('In-Memory MongoDB seeded with initial data.');
    }
  } catch (error) {
    console.warn('Unable to start or connect to in-memory MongoDB. Falling back to local JSON data.', error);
    useMongo = false;
  }
}

app.get('/', (req, res) => {
  res.send('Backend Server Running');
});

app.get('/api/portfolio', async (req, res) => {
  if (useMongo) {
    try {
      const db = client.db(dbName);
      const portfolioData = await db.collection(collectionName).findOne({}, { projection: { _id: 0 } });
      if (portfolioData) {
        return res.json(portfolioData);
      }
      console.warn('No portfolio document found in MongoDB. Returning fallback data instead.');
    } catch (error) {
      console.error('Error loading portfolio data from MongoDB:', error);
      return res.status(500).json({ error: 'Failed to load portfolio data from MongoDB.' });
    }
  }

  res.json(fallbackData);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'I am Fine' });
});

connectMongo().then(() => {
  const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Stop the process using that port or change PORT in .env.`);
      process.exit(1);
    }
    throw err;
  });
});
