// Pessoa -> 123 -> {...} ---- A constante pessoa foi definida, ela aponta o endereço 123
const pessoa = { nome: 'Hugo'}

pessoa.nome = 'Pedro'// Neste momento o nome é alterado para o valor de Pedro, porém o endereço é o mesmo(123)

console.log(pessoa)

// pessoa -> 456 ->{ ... }
//pessoa = { nome: 'Ana'} Ou seja, não é possivel pois não é possivel atribuir outro objeto para a constante

Object.freeze(pessoa)// Bloqueia o objeto neste momento

pessoa.nome = "MMMM"//Já não é possivel mudar o objeto depois do freeze

console.log(pessoa)// Return Pedro, ultima alteração no objeto

//Criar um objeto constante inicialmente

const pessoaConstante = Object.freeze({ nome: 'Hugo'})
console.log(pessoaConstante)