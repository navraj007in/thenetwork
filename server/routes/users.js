const _ = require('lodash');
var {User} = require('./../model/user');
exports.findAll = function(req, res) {
console.log('All Users list');
res.send();
};

exports.login = function(req,res) {
   
        var body = _.pick(req.body, ['email', 'password']);
      
        User.findByCredentials(body.email, body.password).then((user) => {
          return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
          });
        }).catch((e) => {
          res.status(400).send();
        });
     
};

exports.logout = function(req,res) {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
      }, () => {
        res.status(400).send();
      });
};

exports.myprofile = function(res,res) {

};

exports.setprofile = function(req,res) {

};

exports.createuser = function(req,res) {
  
        var body = _.pick(req.body, ['email', 'password','username']);
    
        var user = new User(body);
        user.createdAt = Date.now();
    
        user.save().then(() => {
          return user.generateAuthToken();
        }).then((token) => {
          res.header('x-auth', token).send(user);
        }).catch((e) => {
          res.status(400).send(e);
        })
      
};