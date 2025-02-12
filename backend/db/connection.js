const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

dotenv.config();

const db_password = encodeURIComponent(process.env.DB_PASSWORD);
const uri = `mongodb+srv://justintantj:${db_password}@cluster0.ha9v2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("sample_training");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

await connectDB();

export default db;
