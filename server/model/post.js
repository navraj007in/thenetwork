mongoose = require('mongoose');

Comment = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
    author:{
        type:String,
        required:false,
        default:"anonymous"
    },
    createdDate:{
        type:String,
        required:true,
        default: Date.now
    }
});

Reaction = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
    ReactionType: {
        type: String
    },
    createdDate:{
        type:String,
        required:true,
        default: Date.now
    }
});


var PostSchema = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      post:{
        type: String
      },
      postType : {
          type:String,
          required: true
      },
      postUrl: {
        type:String
      },
      comments: {type: [Comment]},
      _createdAt : {
          type: Date
      },
      reactions: {type: [Reaction]},
      _updatedAt : {
          type: Date
      },
      
      likesCount : {
        type: Number
      },
      commentCount: {
          type: Number
      }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = {Post}