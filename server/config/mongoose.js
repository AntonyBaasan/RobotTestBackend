var mongoose = require('mongoose');
var commentModel = require('../models/Rpcomment');

module.exports = function(config) {
  mongoose.connect(config.db);
  
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  commentModel.createDefaultComments();

};