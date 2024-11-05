const express = require("express");
const crypto = require("crypto");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  // Generate a random nonce for each request
  const nonce = crypto.randomBytes(16).toString("base64");

  // Set the Content Security Policy header
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' http://unsecure.com;`
  );

  // Pass the nonce to the next middleware (if needed)
  res.locals.nonce = nonce;
  next();
});

// Serve static files
app.use(express.static("public"));

// Serve the main page
app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

// Content-Security-Policy:
//   default-src 'self';           /* Only allow resources from the same origin */
//   script-src 'self' 'nonce-xyz'; /* Allow scripts from the same origin with specific nonce */
//   object-src 'none';             /* Block all plugins */
//   style-src 'self' cdn.example.com; /* Allow styles from self and trusted CDN */
//   connect-src 'self';            /* Limit network connections to self */
