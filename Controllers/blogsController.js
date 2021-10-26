const fetchAllBlogs = require("../Models/blogsModel");

const getAllBlogs = (req, res) => {
  fetchAllBlogs((err, blogs) => {
    if (err) console.log(err);
    else {
      res.status(200).send(blogs);
    }
  });
};

module.exports = getAllBlogs;
