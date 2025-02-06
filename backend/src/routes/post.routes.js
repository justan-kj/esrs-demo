const express = require("express");
const posts = require("../dummy_data/posts");

const router = express.Router();

// Get all posts
router.get("/", (req, res) => res.json(posts));

// Get a single post
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === Number(id));

  post ? res.json(post) : res.status(404).json({ error: "Post not found" });
});

// Create a new post
router.post("/", (req, res) => {
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res.status(400).json({ error: "Missing userId or content" });
  }

  const newPost = { id: posts.length + 1, userId, content };
  posts.push(newPost);

  res.status(201).json(newPost);
});

// Delete a post
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((p) => p.id === Number(id));

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(postIndex, 1);
  res.status(204).send();
});

module.exports = router;
