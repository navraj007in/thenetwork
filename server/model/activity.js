mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      _otherUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      notes:{
        type: String
      },
      ActivityType : {
          type:String,
          required: true
      },
      _createdAt : {
          type: Date
      }
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = {Activity}