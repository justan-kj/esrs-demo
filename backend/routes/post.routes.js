import express from "express";
const postRouter = express.Router();
import db from "../db/connection.js";

const postsUsersJoin = [
  {
    $lookup: {
      from: "users", // The users collection
      localField: "userId", // Field in posts that references a user
      foreignField: "_id", // Field in users to match against
      as: "user", // The output field with the user details
    },
  },
  {
    $unwind: "$user", // Flattens the userInfo array into a single document
  },
];

// Get all posts
postRouter.get("/", async (req, res) => {
  let collection = await db.collection("posts");
  let results = await collection.aggregate(postsUsersJoin).limit(50).toArray();
  res.send(results).status(200);
});

// Get a single post
postRouter.get("/:id", async (req, res) => {
  let collection = await db.collection("posts");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Create a new post
postRouter.post("/", async (req, res) => {
  let collection = await db.collection("posts");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update a new post
postRouter.patch("/comment/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body },
  };
  let collection = await db.collection("posts");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// Delete a post
postRouter.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const collection = db.collection("posts");
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

export default postRouter;
