const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const apiRouter = require("./router/apiRouter.js");

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Server started to http://localhost:${port}`)
);
