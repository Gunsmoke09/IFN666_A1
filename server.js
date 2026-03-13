const express = require("express");

// Put your code here
const apiRouter = require("./src/routes/index");
const mediaTypeValidator = require("./src/middleware/mediaTypeValidator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// Put your code here

app.use(mediaTypeValidator);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello, IFN666!");
  });

app.listen(port, () => {
  console.log(`Server is listening on :${port}`)
});

module.exports = app;