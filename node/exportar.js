console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Hugo'
}// Não altera para onde aponta o exports

console.log(module.exports)

module.exports = { publico: true }// Para alterar o objeto deve-se usar sempre module.exports

