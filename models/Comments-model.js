const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ------------Create CommentSchema
const CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: [true, 'Name already exists'],
        maxlength: 10
    },
    message: {
        type: String,
        default: 'Hello there, Love your App!!! Amazing work SilvenLEAF! Keep it up!!!'
    }
});



// ------------Create CommentSchema
const Comments = mongoose.model('comment', CommentSchema);

module.exports = Comments;