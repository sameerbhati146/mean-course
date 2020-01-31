const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post created successfully!'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: 'kgfhger3324523',
      title: 'This is the first post',
      content: 'First post from the server'
    },
    {
      id: 'lkjlkj908098',
      title: 'This is the second post',
      content: 'Second post from the server!'
    }
  ]
res.status(200).json({
  message: "Posts successfully fetched!",
  posts: posts
})
});

module.exports = app;
