const express = require("express");
const app = express();

app.use(express.json());

// Sample data for blog posts
let blogPosts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
  // ... and so on
];

// Get all blog posts
app.get("/posts", (req, res) => {
  res.json(blogPosts);
});

// Get a specific blog post by ID
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find((post) => post.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Blog post not found.");
  }
});

// Add a new blog post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).send("Title and content are required.");
  } else {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    blogPosts.push(newPost);
    res.status(201).json(newPost);
  }
});

// Update a blog post by ID
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex((post) => post.id === postId);

  if (postIndex !== -1) {
    blogPosts[postIndex] = {
      id: postId,
      title: title || blogPosts[postIndex].title,
      content: content || blogPosts[postIndex].content,
    };

    res.json(blogPosts[postIndex]);
  } else {
    res.status(404).send("Blog post not found.");
  }
});

// Delete a blog post by ID
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex((post) => post.id === postId);

  if (postIndex !== -1) {
    const deletedPost = blogPosts.splice(postIndex, 1);
    res.json(deletedPost[0]);
  } else {
    res.status(404).send("Blog post not found.");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
