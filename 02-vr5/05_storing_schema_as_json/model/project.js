const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// parse schema
const jsonProjectSchema = require('./projectSchema.json');

// Create a schema
const projectSchema = Schema(jsonProjectSchema);

// const projectSchema = new mongoose.Schema({
//   name: String
// });

const Project = mongoose.model('Project', projectSchema);

exports.Project = Project;
