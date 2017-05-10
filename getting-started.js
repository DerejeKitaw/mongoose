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

// add "speak" functionality to our documents:
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

// compile the schema into a Model.
var Kitten = mongoose.model('Kitten', kittySchema);

// create a kitten document representing the little guy we just met on the sidewalk outside:
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

// Save kittens
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

// display all the kittens
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})


//  filter our kittens by name
// Kitten.find({ name: /^fluff/ }, callback);