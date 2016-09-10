const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = {
  name: require('./../fields/fields-name'),
  email: require('./../fields/fields-email'),
  cpf: require('./../fields/fields-cpf'),
  estado: require('./../fields/fields-estado'),
  senha: require('./../fields/fields-senha'),
  created_at: require('./../fields/fields-created_at')
}
module.exports = new Schema(User);