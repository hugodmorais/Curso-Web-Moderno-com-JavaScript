let a = 3

this.c = 456

console.log(this.a)//Variavel let não está no escopo global
console.log(global.a)//Global equivale a window no browser

console.log(this.c)


abc = 3//Variavel sem let ou var, ela fica disponivel no escopo global

console.log(global.abc)