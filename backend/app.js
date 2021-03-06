const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const Post = require('./models/post')
const postsRoutes = require("./routes/posts");

const app = express();

const connectUrl = 'mongodb+srv://sam:hr3iaJoMaD6F5o4z@cluster0-jdwin.mongodb.net/test?retryWrites=true&w=majority';

const connectConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

//hr3iaJoMaD6F5o4z

mongoose.connect(connectUrl, connectConfig)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

// app.post("/api/posts", (req, res, next) => {
//   const post = new Post({
//     title : req.body.title,
//     content : req.body.content
//   });
//   post.save().then(createdPost => {
//     res.status(201).json({
//       message: 'Post created successfully!',
//       postId: createdPost._id
//     });
//   });
// });

// app.get("/api/posts", (req, res, next) => {
//   Post.find().then(documents => {
//     res.status(200).json({
//       message: "Posts successfully fetched!",
//       posts: documents
//     });
//   });
// });

// app.put("/api/posts/:postId", (req, res, next) => {
//   const post = new Post({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content
//   })
//   Post.updateOne({_id: req.params.id}, post).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "updated successfully !" });
//   });
// });

// app.delete("/api/posts/:id", (req, res, next) => {
//   Post.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Post deleted!" });
//   });
// });

app.use("/api/posts", postsRoutes);
module.exports = app;

