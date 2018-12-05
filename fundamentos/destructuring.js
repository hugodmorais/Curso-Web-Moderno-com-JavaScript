// ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa//Retiro apenas os atributos nome e idade
console.log(nome, idade)//Retorna Ana, 5

const { nome: n, idade: i } = pessoa//Retiro os atributos nome e idade e de seguida faço o espelho em n e i e posso usar de seguida
console.log(n, i)//Retorna Ana, 5

const { endereco: { logradouro, numero }} = pessoa
console.log( logradouro, numero )// Retorna Rua ABC, 1000
