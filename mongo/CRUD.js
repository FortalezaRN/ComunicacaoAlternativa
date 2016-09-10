'use strict';

const mongoose = require('mongoose');
const querystring = require('querystring');
const schemaUser = require('./Schemas/schema-user');
//const Model = require('./model')(schemaUser, 'UsuarioTerapeuta');
const create = require('./actions/action-create')(schemaUser);
// const find = require('./../actions/action-find')(Organism);
// const findOne = require('./../actions/action-findOne')(Organism);
// const update = require('./../actions/action-update')(Organism);
// const remove = require('./../actions/action-remove')(Organism);

const CRUD = {
   create
// , find
// , findOne
// , update
// , remove
};
module.exports = CRUD;