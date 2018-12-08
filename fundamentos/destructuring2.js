function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min:40 }//Objeto criado com um minimo e um máximo
console.log(rand(obj))//retorna valor random entre o minimo e o máximo do objeto

console.log(rand({}))//Possivel passar para a função objecto vazio, neste caso, assume o minimo 0 e o máximo 1000 definidos na função

console.log(rand( { min: 955 }))//Possivel definir apenas o minimo, assumirá o máximo atribuido na função