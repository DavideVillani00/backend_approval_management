const express = require("express");
const router = express.Router();

const usersRouter = require("./api/usersRouter.js");
const requestRouter = require("./api/requestRouter.js");
const loginRouter = require("./api/loginRouter.js");
const signupRouter = require("./api/signupRouter.js");

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/users", usersRouter);
router.use("/request", requestRouter);

module.exports = router;
