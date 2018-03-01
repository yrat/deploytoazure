const mongoose = require('mongoose');
const dbURI = 'mongodb://root:laurea99@ds012178.mlab.com:12178/laurea_mean';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose correctly connected to the DB');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error : ', err);
});