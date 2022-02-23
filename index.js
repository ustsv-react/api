const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { getAllOjProblems, getOjProblemById, checkAnswer } = require("./oj");
const { loginHandler } = require("./login");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cookieParser());

app.use((_, res, next) => {
  if (res.cookies["magic-word"] === "ustsv") {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    next();
  }
});

app.get("/api/users", (_, res) => {
  res.status(200).send("hello world from ustsv.");
});

app.post("/api/login", loginHandler);

app.get("/oj/api/problems", getAllOjProblems);
app.get("/oj/api/problems/:problemId", getOjProblemById);
app.post("/oj/api/problems/:problemId/answer", checkAnswer);

app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});
