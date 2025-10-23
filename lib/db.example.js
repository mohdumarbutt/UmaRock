// Optional MongoDB helper (not wired into runtime by default)
// Enable by setting settings.useMongoDB=true and providing process.env.MONGO_URI

const { MongoClient } = require('mongodb');

let client;

async function getClient() {
  if (client) return client;
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is not set');
  client = new MongoClient(uri, { maxPoolSize: 5 });
  await client.connect();
  return client;
}

async function getDb(dbName = 'umarock_bot') {
  const c = await getClient();
  return c.db(dbName);
}

module.exports = { getDb };
