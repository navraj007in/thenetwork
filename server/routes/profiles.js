const _ = require('lodash');
var {Profile} = require('./../model/profile');

exports.myprofile = function(req,res) {
    console.log(req.user._id);
    Profile.findOne({ '_creator':req.user._id },function(err,user){
        if(err){
            res.status(401).send();
        }
        else {
            res.status(200).send(user);
        }
    });
};

exports.getuserprofile = function(req,res) {
    var id = req.params.id;

    Profile.findById( id ,function(err,user){
        if(err){
            res.status(401).send();
        }
        else {
            res.status(200).send(user);
        }
    });

};

exports.setprofile = function(req,res) {
    Profile.findOneAndUpdate(
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
