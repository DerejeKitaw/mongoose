var mongoose = require('mongoose');

//connect to the test database running on localhost.
mongoose.connect('mongodb://localhost/test'); // a pending 

 
// get notified if successfull connected or if a connection error occurs

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});