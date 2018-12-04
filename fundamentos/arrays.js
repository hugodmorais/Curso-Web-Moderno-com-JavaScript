const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//Acessa os indices do array
console.log(valores[7])//Apesar de querer acessar o elemento de um array que não existe não dá erro, dá undefined

valores[7] = 10//Acrescenta o valor 10 à posição 7

console.log(valores[7])
console.log(valores[6])//Apesar de ter algo na posição 7, a posição 6 não foi definida, resulta undefined

console.log(valores.length)//Resulta o número total de elementos, apenas definimos 5 no total mas como um deles foi em campos avançados automaticamente ele cria espaço para os campos 5 e 6 neste caso

valores.push({id: 3}, false, null, 'teste')//O push acrescenta valores ao Array, podem ser de tipos diferentes

console.log(valores)

//Boa prática é dividir os Arrays por tipos apesar de poderem ser heterogêneos

console.log(valores.pop())//Elimina o ultimo elemento
delete valores[0]//Elimina o campo da posição 0
console.log(valores)

console.log(typeof valores)//É do tipo object
