const express = require("express");
const {
  getAllBlogs,
  postBlog,
  getBlog,
} = require("../Controllers/blogsController");

const blogsRouter = express.Router();

blogsRouter.get("/", getAllBlogs);
blogsRouter.post("/", postBlog);
blogsRouter.get("/:title", getBlog);

module.exports = blogsRouter;
