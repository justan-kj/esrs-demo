app.get("/users/{user_id}", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.put("/users/{user_id}", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/users/{user_id}/posts", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
