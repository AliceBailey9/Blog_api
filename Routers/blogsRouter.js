const express = require("express");
const { getAllBlogs, postBlog } = require("../Controllers/blogsController");

const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.post("/", postBlog);

module.exports = blogsRouter;
