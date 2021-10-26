const express = require("express");
const apiRouter = require("./Routers/apiRouter");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
