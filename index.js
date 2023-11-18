const express = require("express");
const app = express();

const PORT = 3000;

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
