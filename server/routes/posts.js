const _ = require('lodash');
var {Post} = require('./../model/post');


exports.createpost = function(req,res) {
    var post = new Post();

    post = req.body;
    post._creator = req.user._id;
    
    post.save(post).then(() =>{
        res.send(200);
    }).catch((e) =>{
        console.log(e);
        res.status(401).send();
    });

};

exports.editpost = function(req,res) {
    Post.findOneAndUpdate(
        {_creator: req.user._id}, // find a document with that filter
        req.body, // document to insert when nothing was found
        {upsert: true, new: true, runValidators: true}, // options
        function (err, doc) { // callback
            if (err) {
                res.status(401).send();
                // handle error
            } else {
                // handle document
                res.status(200).send();

            }
        }
    );
};

exports.getuserposts = function(req,res) {
    var id = req.params.id;

    Post.find( {'_creator': id} ,function(err,user){
        if(err){
            res.status(401).send();
        }
        else {
            res.status(200).send(user);
        }
    });

};

exports.getmyposts = function(req,res) {
    var id = req.params.id;
    
        Post.find({'_creator' : req.user._id},function(err,posts){
            res.status(200).send(posts);
        });    
    
    
};

exports.deletepost = function(req,res) {
    Post.findOneAndRemove(
        {_creator: req.user._id}, // find a document with that filter
        function (err, doc) { // callback
            if (err) {
                res.status(401).send();
                // handle error
            } else {
                // handle document
                res.status(200).send(doc);

            }
        }
    );
};
