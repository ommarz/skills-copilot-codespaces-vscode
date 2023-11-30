// Create web server
const express = require('express');
const app = express();
// Create database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
// Create schema
const commentSchema = new mongoose.Schema({
    comment: String
});
// Create model
const Comment = mongoose.model('Comment', commentSchema);
// Create a new comment
const comment = new Comment({ comment: 'This is a new comment.' });
// Save comment to database
comment.save();
// Get all comments from database
async function getComments() {
    const comments = await Comment.find();
    console.log(comments);
}
getComments();
// Get comment by ID from database
async function getComment(id) {
    const comment = await Comment.findById(id);
    console.log(comment);
}
getComment('5e7d0e8e0f7e6a1e1cfcf8a7');
// Update comment in database
async function updateComment(id) {
    const comment = await Comment.findById(id);
    if (!comment) return;
    comment.comment = 'This comment has been updated.';
    const result = await comment.save();
    console.log(result);
}
updateComment('5e7d0e8e0f7e6a1e1cfcf8a7');
// Delete comment from database
async function deleteComment(id) {
    const result = await Comment.deleteOne({ _id: id });
    console.log(result);
}
deleteComment('5e7d0e8e0f7e6a1e1cfcf8a7');
// Path: index.js
// Create web server
const express = require('express');
const app = express();
// Create database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
// Create schema
const commentSchema = new mongoose.Schema({
    comment: String
});
// Create model
const Comment = mongoose.model('Comment', commentSchema);
// Create a new comment
const comment = new