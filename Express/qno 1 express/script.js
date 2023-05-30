const express = require("express");
const app = express();

// Sample data for posts
const posts = [
  { id: 1, title: "Post 1", content: "This is the first post" },
  { id: 2, title: "Post 2", content: "This is the second post" },
  // ... and so on, up to 20 posts
];

app.get("/post", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
