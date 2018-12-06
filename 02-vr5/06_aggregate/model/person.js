const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// parse schema
const jsonPersonSchema = require('./personSchema.json');

// Create a schema
const personSchema = Schema(jsonPersonSchema);

const Person = mongoose.model('Person', personSchema);

exports.Person = Person;
