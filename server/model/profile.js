mongoose = require('mongoose');

var Profile = mongoose.model('Profile',{
    UserName :{
        type : String
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
    Description : {
        type : String
    },
    Height : {
        type : String
    },
    BodyType : {
        type : String
    },
    RelationShipStatus :{ 
        type : String
    },
    LifeStyle : {
        type : String
    },
    NetWorth : {
        type : String
    },
    AnnualIncome : {
        type : String
    },
    Ethnicity :{
        type: String
    },
    HairColor :{
        type: String
    },
    Occupation :{
        type: String
    },
    Education :{
        type: String
    },
    Children :{
        type: String
    },
    Smoking :{
        type: String
    },
    Drinking :{
        type: String
    },
    LookingFor :{
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
        required: true
      },
     
});

module.exports = {Profile}