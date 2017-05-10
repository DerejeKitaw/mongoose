var mongoose = require('mongoose');

//connect to the test database running on localhost.
mongoose.connect('mongodb://localhost/test'); // a pending 

 
// get notified if successfull connected or if a connection error occurs

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// define kitten schema
var kittySchema = mongoose.Schema({
    name: String //a schema with property, name, which will be a String.
});

// compile the schema into a Model.
var Kitten = mongoose.model('Kitten', kittySchema);