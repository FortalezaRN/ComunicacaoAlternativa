module.exports = {
  type: String,
  validate: [require('./../getSetValidate/validate-string-lengthGTE3'), "Nome menor que 3 caracteres"],
  required: true,
  index: true
}