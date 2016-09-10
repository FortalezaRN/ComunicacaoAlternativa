module.exports = {
  type: String,
  get: require('./../getSetValidate/cpf-mask'),
  set: require('./../getSetValidate/only-number'),
  validate: [require('./../getSetValidate/validate-cpf'), "CPF inválido por favor verifique o cpf digitado"],
  required: true
}