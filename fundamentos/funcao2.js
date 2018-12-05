//Armazenando uma função dentro de uma variavel
const imprimirSoma = function(a, b){

}

imprimirSoma(2, 3)

//Armazenadno uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//Retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(10, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!!')