const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const db = 'mongodb://localhost/expressdemo';
mongoose.connect(db).then(() => {
  console.log(`Connected to ${db}`);
});

app.use(morgan('dev'));

app.use(bodyParser.json());

app.get('/users', function(req, res) {
  res.send('/users works');
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.info(`Listening on port ${port}...`)
);
