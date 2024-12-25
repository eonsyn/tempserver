const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!"); // Basic route to test
});

app.listen(2300, () => {
  console.log("Server is listening on port 2300");
});
