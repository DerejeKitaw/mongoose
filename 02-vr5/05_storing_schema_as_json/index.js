const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const db = 'mongodb://localhost/expressdemo';
mongoose.connect(db,{ useNewUrlParser: true }).then(() => {
  console.log(`Connected to ${db}`);
});

app.use(morgan('dev'));

app.use(bodyParser.json());

require("./startup/routes")(app);


const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.info(`Listening on port ${port}...`)
);

module.exports = server;