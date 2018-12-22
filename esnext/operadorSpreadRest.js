// operador .. rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: 'Hugo', salario: 123.12}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Hugo', 'Kenia', 'Dany']
const grupoFinal = ['Morais', 'Rafa', ...grupoA]

console.log(grupoFinal)