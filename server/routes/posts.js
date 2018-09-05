const _ = require('lodash');
var {Post} = require('./../model/post');
var {User} = require('./../model/user');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

exports.createpost = function(req,res) {
    var post = new Post(req.body);

    post._creator = (req.user._id);
    post._updatedAt = post._createdAt = Date.now();
    post.save((err,doc)=>{
        if(err){
            console.log(err);
            res.send(500);
        }
        res.status(200).send(doc);
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
    User.findOne({'username': id},(err,user) =>{
        if(err)
            res.send(500);
        Post.find({'_creator': user._id}, (err,posts) =>{
            if(err){
                console.log(err);
                res.status(401).send();
            }
            else {
                res.status(200).send(posts);
            }
        });
    });

    // Post.find( {'_creator': id} ,function(err,user){
    //     if(err){
    //         console.log(err);
    //         res.status(401).send();
    //     }
    //     else {
    //         res.status(200).send(user);
    //     }
    // });

};

exports.getmyposts = function(req,res) {
    var id = req.params.id;
    
        Post.find({'_creator' : req.user._id},function(err,posts){
            res.status(200).send(posts);
        });    
    
    
};

exports.deletepost = function(req,res) {
    var id = req.params.id;
    Post.findOneAndRemove(
        {'_creator': req.user._id,'_id': id}, // find a document with that filter
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
