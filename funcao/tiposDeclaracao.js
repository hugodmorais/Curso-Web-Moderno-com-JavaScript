console.log(soma(3, 4))// A function soma é válida em qualquer parte do código, as funções são carregadas em primeiro lugar

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))// Em uma expression function ela só pode ser chamada depois de declarada

// named function expression
const mult = function mult(x, y) {
    return x * y
}//forma pouco usada, como é nomeada, o nome da function aparece no debug, pode ser uma vantagem

console.log(sub(3, 4))// Em uma named function expression ela só pode ser chamada depois de declarada