'use strict';

let knex = require('./db');
let bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies with relations
bookshelf.plugin(require('bookshelf-eloquent'));

module.exports = bookshelf;