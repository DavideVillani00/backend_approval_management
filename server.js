const express = require("express");
const app = express();
const port = 3000;

const apiRouter = require("./router/apiRouter.js");

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Server started to http://localhost/${port}`)
);
