const _ = require('lodash');
var {Activity} = require('./../model/activity');

exports.createactivity = function(req,res) {
    var activity = new Activity();

    activity = req.body;
    activity._creator = req.user._id;
    if(activity.ActivityType == 'Favorite') {

    }
    activity.save(activity).then(() =>{
        res.send(200);
    }).catch((e) =>{
        console.log(e);
        res.status(401).send();
    });

};

exports.getactivities = function(req,res) {
    var id = req.params.id;
    if(id == 'all' ){
        Activity.find({'_creator' : req.user._id},function(err,activities){
            res.status(200).send(activities);
        });    
    }
    else {
        Activity.find({'_creator' : req.user._id},function(err,activities){
            res.status(200).send(activities);
        });    
    }
};

exports.deleteactivity = function(req,res) {
    
};
