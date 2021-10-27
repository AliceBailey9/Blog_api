const { fetchAllBlogs, postTheBlog } = require("../Models/blogsModel");

const getAllBlogs = (req, res) => {
  fetchAllBlogs((err, blogs) => {
    if (err) console.log(err);
    else {
      res.status(200).send(blogs);
    }
  });
};

const postBlog = (req, res) => {
  const blog = req.body;
  postTheBlog(blog, (err, msg) => {
    if (err) console.log(err);
    else {
      res.status(200).send(msg);
    }
  });
};

module.exports = { getAllBlogs, postBlog };
