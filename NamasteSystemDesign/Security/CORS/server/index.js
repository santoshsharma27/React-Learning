const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigins = [
  "http://127.0.0.1:5501",
  "http://your-other-allowed-origin.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS policy: ${origin} is not allowed.`);
      callback(new Error("CORS error: This origin is not allowed"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Namaste Frontend System Design",
    },
  ]);
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
