const ferrari = {
    modelo: 'F40',
    velMax: 323
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)// True
console.log(volvo.__proto__=== Object.prototype)// True
console.log(Object.prototype.__proto__ === null)// True, não há prototype acima de Object.prototype

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)