const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const db_password = encodeURIComponent(process.env.DB_PASSWORD);

const uri =
  "mongodb+srv://justintantj:${db_password}@cluster0.ha9v2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("sample_training");
export default db;
