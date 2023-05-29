const url = "https://jsonplaceholder.typicode.com/posts";

const rendering = (blog) => {
  const blogItem = document.createElement("li");
  blogItem.className = "blog-item";
  blogItem.innerHTML = `
    <h3>${blog.title}</h3>
    <p>${blog.body}</p>
    <button class="delete-btn" data-id="${blog.id}">Delete</button>
  `;
  blogList.appendChild(blogItem);
};

fetch(`${url}`)
  .then((response) => response.json())
  .then((data) => {
    const blogList = document.getElementById("blogList");
    data.map((blog) => {
      rendering(blog);
    });
  });

// Add event listener to the form submit
const blogForm = document.getElementById("blogForm");
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  // Create new blog post object
  const newBlog = {
    title,
    body,
  };

  // Send POST request to create a new blog post
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((data) => {
      // Clear form values
      document.getElementById("title").value = "";
      document.getElementById("body").value = "";

      // Add new blog post to the UI
      rendering(data);
    });
});

// Add event listener to delete buttons
const blogList = document.getElementById("blogList");
blogList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const blogId = e.target.dataset.id;

    // Send DELETE request to remove the blog post
    fetch(`${url}/${blogId}`, {
      method: "DELETE",
    }).then((response) => {
      // Remove the blog post from the UI
      e.target.parentElement.remove();
    });
  }
});
