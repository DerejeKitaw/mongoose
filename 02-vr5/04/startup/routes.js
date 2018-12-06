const express = require('express');
const projects = require('../routes/projects');


module.exports = function (app) {
  app.use(express.json());
  app.use('/api/v1/projects', projects);
}