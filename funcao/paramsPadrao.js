function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())//Retorna 3
console.log(soma1(3))//Retorna 5
console.log(soma1(4))//Retorna 6
console.log(soma1(3, 1))//Retorna 5
console.log(soma1(3, 2, 3))//Retorna 8

console.log(soma1(0, 0, 0))//Atenção, retorna 3 pois considera o 0 como false

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


//Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))