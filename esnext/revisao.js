// let e const

{
    var a = 2
    let b = 3
    console.log(b)// Dentro do bloco apenas o let
}
console.log(a)// Retorna 2
//console.log(b)  ------ Não é possivel acessar

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)