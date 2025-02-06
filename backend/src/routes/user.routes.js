const express = require("express");
const users = require("../dummy_data/users");

const router = express.Router();

// Get all users
router.get("/", (req, res) => res.json(users));

// Get a single user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));

  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

module.exports = router;
