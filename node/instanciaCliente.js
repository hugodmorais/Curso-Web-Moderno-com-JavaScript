const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)// Return 3, memoria cache
console.log(contadorB.valor)// Return 3, memoria cache

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)//Return 3
console.log(contadorD.valor)//Return 1, não cria memoria cache pois é uma nova instância criada a partir de uma função factory