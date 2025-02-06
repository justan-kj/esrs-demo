app.post("/posts", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/posts/{post_id}", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.put("/posts/{post_id}", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.delete("/posts/{post_id}", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/feed", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
