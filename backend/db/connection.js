import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
console.log("string: " + connectionString);
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("esrs_app");
export default db;
