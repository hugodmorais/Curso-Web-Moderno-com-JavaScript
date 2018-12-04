let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//Necessario chamar com uma negação pois se chamar apenas isActive dará 1 pois é o valor da variavel, se negar apenas uma vez ele inverte para false

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)//Atenção ao 0 retorna false
console.log(!!'')//String vazia retorna false, util para confirmar se um campo esta preenchido ou não
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || ' '))//Ou ou, ou seja, um dos campos estará presente

let nome = ''
console.log(nome || 'Desconhecido')//Caso o nome não esteja presente retorna Desconhecido