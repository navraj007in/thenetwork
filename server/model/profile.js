mongoose = require('mongoose');

var Profile = mongoose.model('Profile',{
    UserName :{
        type : String,
        unique: true,
        minlength: 5
    },
    Heading :{
        type : String,
    },
    Gender : {
        type : String
    },
    DOB :{
        type : Date
    },
    City : {
        type :String
    },
    State :{
        type : String
    },
    Country :{
        type : String
    },
    CoverURL :{
        type: String
    },
    ProfileImageURL :{
        type: String
    },
    URLs :{
        type: String
    },
    Reputations :{
        type: String
    },
    Bio : {
        type : String
    },
    Schools : {
        type : String
    },
    Colleges : {
        type : String
    },
    RelationShipStatus :{ 
        type : String
    },
    Workplaces : {
        type : String
    },
    Favorites : {
        type : String
    },
    Places : {
        type : String
    },
    Contact :{
        type: String
    },
    PhotoAlbums :{
        type: String
    },
    VideoAlbums :{
        type: String
    },
    Education :{
        type: String
    },
    Friends :{
        type: String
    },
    Family :{
        type: String
    },
    Colleagues :{
        type: String
    },
    Neighbors :{
        type: String
    },
    Groups :{
        type: String
    },
    Tags :{
        type: String
    },
    location : {
        type: [Number],
        index:'2d'
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
      },
     
});

module.exports = {Profile}