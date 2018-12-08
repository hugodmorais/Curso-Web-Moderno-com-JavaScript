function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]//Dentro do array faz a desestruturação do min e max, para atualizar a posição no array se o valor pedido no minimo for maior que o valor colocado na posição do máximo
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))//Retorna valores entre 40 e 50 mesmo o 50 tend sido colocado na primeira posição do array
console.log(rand([992]))
console.log(rand([, 40]))
console.log(rand([]))
