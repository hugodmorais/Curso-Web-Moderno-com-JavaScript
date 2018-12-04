const escola = 'Cod3r'

console.log(escola.charAt(4))//Retorna a quarta posição da string
console.log(escola.charAt(5))//Retorna um valor vazio, não retorna erro quando chamado uma posição fora da string
console.log(escola.charCodeAt(3))//Retorna não o numero 3 mas sim a posição desse caracter no código HTML - tabela Unicode
console.log(escola.indexOf('3'))//Retorna o indice associado do caracter , no caso, [3]

console.log(escola.substring(1))//Retorna a string a partir da posição 1 - 'od3r'
console.log(escola.substring(0, 3))//Retorna os caracteres da string entre a posição 0 e a posiçao 3, não incluindo a posição 3 - 'Cod'

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")//O resultado é o mesmo da função concat
console.log(escola.replace(3, 'e'))//Replace, substitui o numero 3 pela letra e

console.log('Ana,Maria,Pedro'.split(','))//O .split faz com que os elementos sejam quebrados tornando-se independentes dentro de um Array
