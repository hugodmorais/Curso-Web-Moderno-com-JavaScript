console.log('a =', a)//Resultado undefined, existe o hoisting, ou seja, ele iça o ----var a----
var a = 2
console.log('a =', a)//Resultado 2

console.log('b =', b)
//let b = 2 o let não faz hoisting, ou seja, chamar a variavel antes de a declarar dará erro