console.log('01)', '1' == 1)//Resultado true, o valor 1 será considerado apesar de ser uma string

console.log('02)', '1' === 1)//Resultado false, compara se os valores são estritamente iguais

console.log('03)', '3' != 3)//Resultado false, mesma situação da alinea 1

console.log('04)', '3' !== 3)//Resultado true, estritamente diferente

console.log('05)', 3 < 2)

console.log('06)', 3 > 2)

console.log('07)', 3 <= 2)

console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1)
console.log(d2)
console.log('09)', d1 === d2)//False. Compara as referências de memória
console.log('10)', d1 === d2)//False. Compara as referências de memória
console.log('11)', d1.getTime() === d2.getTime())//Como tem o mesmo tipo e valor o resultado é true
console.log('12)', d1.getTime() == d2.getTime())//Como tem o mesmo tipo e valor o resultado é true
console.log('12)', undefined == null)//True
console.log('12)', undefined === null)//False, estritamente iguais
