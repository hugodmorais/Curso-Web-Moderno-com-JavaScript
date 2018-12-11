let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {//Função anonima(função arrow)
    return 2 * a//Se tiver apenas um parametro pode-se retirar os parenteses.
}

dobro = a => 2 * a//Return implicito(faz o mesmo que a função arrow acima)
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'//Possui sim um parâmetro
ola = _ => 'Olá'//Possui sim um parâmetro
console.log(ola())

