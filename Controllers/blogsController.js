const {
  fetchAllBlogs,
  postTheBlog,
  getTheBlog,
} = require("../Models/blogsModel");

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

const getBlog = (req, res) => {
  const { title } = req.params;
  console.log(title);
  getTheBlog(title, (err, blog) => {
    if (err) console.log(err);
    else {
      res.status(200).send(blog);
    }
  });
};

module.exports = { getAllBlogs, postBlog, getBlog };
