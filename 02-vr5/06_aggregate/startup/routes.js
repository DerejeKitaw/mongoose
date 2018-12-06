const express = require('express');
const projects = require('../routes/projects');
const persons = require('../routes/persons');


module.exports = function (app) {
  app.use(express.json());
  app.use('/api/v1/projects', projects);
  app.use('/api/v1/persons', persons);
}