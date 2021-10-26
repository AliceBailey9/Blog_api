const express = require("express");
const blogsRouter = require("./blogsRouter");

const apiRouter = express.Router();

apiRouter.use("/blogs", blogsRouter);

module.exports = apiRouter;
