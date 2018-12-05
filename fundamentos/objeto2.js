console.log(typeof Object)//Function
console.log(typeof new Object)//Object

const Cliente = function() {}
console.log(typeof Cliente)//Function
console.log(typeof new Cliente)//Object

class Produto {}
console.log(typeof Produto)//Function
console.log(typeof new Produto())//Object, é igual, com ou sem os parenteses