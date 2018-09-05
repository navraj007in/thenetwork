var express = require('express'),
    path = require('path'),
    http = require('http');
    var bodyParser = require('body-parser')
fnc = require('./func');
const _ = require('lodash');
var {User} = require('./model/user');
userapis = require('./routes/users');
profileapis = require('./routes/profiles');
activityapis = require('./routes/activities');
postapis = require('./routes/posts');

var {authenticate} = require('./middleware/authenticate');

//var fnc2= new fnc();
var {mongoose} = require('./db/mongoose');

app = express();

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    console.log('hello from social network server');
    console.log(req);
    res.send();
});

app.get('/users', userapis.findAll);
app.post('/users/login', userapis.login);
app.post('/users', userapis.createuser);
app.delete('/users/me/token', authenticate, userapis.logout);
app.get('/users/me',authenticate, profileapis.myprofile);
app.get('/users/profile/:id',authenticate, profileapis.getuserprofile);
app.post('/users/profile', authenticate, profileapis.setprofile);

// Post APIs
app.get('/posts',authenticate,postapis.getmyposts);
app.get('/posts/:id',authenticate,postapis.getuserposts);
app.post('/posts',authenticate,postapis.createpost);
app.delete('/posts/:id',authenticate,postapis.deletepost);

app.post('/activities', authenticate, activityapis.createactivity);
app.get('/activities/type/:id', authenticate, activityapis.getactivities);
app.delete('/activities/:id', authenticate, activityapis.deleteactivity);



console.log('Hello From Social Network');

function test() {
    console.log('Hello from test functions');
};
test();

http.createServer(app).listen(app.get('port'), function () {
    console.log("REST server listening on port " + app.get('port'));
});