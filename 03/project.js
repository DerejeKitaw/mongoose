const mongoose = require('mongoose');
/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/temp_project', {
  useNewUrlParser: true
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});
