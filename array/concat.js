const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Hugo', 'Morais']

const todos = filhas.concat(filhos, 'Daniel')//Possivel não so concatenar mas também adicionar elementos que não pertenciam a nenhum array
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))// Return [ 1, 2, 3, 4, 5, [ 6, 7 ] ]