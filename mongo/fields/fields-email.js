module.exports = {
  type: String,
  validate: [require('./../getSetValidate/validate-email'), "Email invalido verifique o email e digite novamente"],
  required: true
}