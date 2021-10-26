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

module.exports = fetchAllBlogs;
