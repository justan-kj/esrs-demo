const express = require("express");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

// Get a user
router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Create a new user
router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update a user
router.patch("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body },
  };
  let collection = await db.collection("users");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// Delete a user
router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const collection = db.collection("users");
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

module.exports = router;
