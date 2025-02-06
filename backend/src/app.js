const express = require("express");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

const app = express();

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
