const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {// Permite dar caracteristicas para a variavel
    enumerable: true,
    writable: false,// Não aceita ser escrita
    value: '01/01/2019'// Valor definido
})

pessoa.dataNascimento = '01/01/2018'// Este valor não é tido em conta
console.log(pessoa.dataNascimento)// Retorna '01/01/2019'

console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)// Vai concatenar os objectos dentro do primeiro, neste caso no dest
console.log(obj)