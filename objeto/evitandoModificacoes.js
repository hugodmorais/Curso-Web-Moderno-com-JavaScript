// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'// Não é possivel adicionar novos atributos
delete produto.tag//Possivel apagar atributos
console.log(produto)

// Object.seal
const pessoa = { nome: 'Hugo', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Morais'//Possivel alterar atributos
pessoa.sobrenome = 'fdsfdsf'//Não é possivel adicionar atributos
delete pessoa.nome//Não é possivel apagar atributos
console.log(pessoa)

// Object.freeze = selado + valores constantes


