const fs = require("fs");

const fetchAllBlogs = (cb) => {
  const allBlogs = [];
  fs.readdir("./Data", (err, blogFiles) => {
    blogFiles.forEach((blogFile) => {
      fs.readFile(`./Data/${blogFile}`, "utf8", (err, content) => {
        if (err) console.log(err);
        else {
          allBlogs.push({
            title: blogFile.slice(0, blogFile.length - 4),
            content: content,
          });
          if (allBlogs.length === blogFiles.length) {
            cb(null, allBlogs);
          }
        }
      });
    });
  });
};

const postTheBlog = (newBlog, cb) => {
  fs.writeFile(`./Data/${newBlog.title}.txt`, newBlog.content, (err) => {
    if (err) console.log(err);
    else {
      cb(null, "Success");
    }
  });
};

const getTheBlog = (title, cb) => {
  const blog = { title: title };
  fs.readFile(`./Data/${title}.txt`, "utf8", (err, content) => {
    if (err) console.log(err);
    else {
      blog["content"] = content;
      cb(null, blog);
    }
  });
};
module.exports = { fetchAllBlogs, postTheBlog, getTheBlog };
