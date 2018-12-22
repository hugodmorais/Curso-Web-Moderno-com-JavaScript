//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

const divisao = (a, b) => {
    return a / b
}
console.log(divisao(10, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()// Assume o valor padrao
log('Sou mais forte')// Este parâmetro sobrepoe o valor default

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
