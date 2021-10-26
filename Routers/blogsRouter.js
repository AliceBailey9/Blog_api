const express = require("express");
const getAllBlogs = require("../Controllers/blogsController");

const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);

module.exports = blogsRouter;
