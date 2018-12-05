//função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//Possivel passar apenas 1 parametro, como são necessários 2, o segundo vai resultar undefined, resultado - NaN

imprimirSoma(2, 3, 4, 5, 6)//Possivel passar mais parametros, porém apenas os 2 primeiros serão tidos em conta

imprimirSoma()//Sem parametros reultado é NaN

//Função com retorno
function soma(a, b = 1) {
    return a + b
}//Função recebe 2 parametros, porém o b se não for atribuido assume por pre definição o valor de 1

console.log(soma(2, 3))//Resultado 5
console.log(soma(2))//Resultado 3
