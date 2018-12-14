// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = { attr1: 'A' }//O avo aponta para o proto Object.prototype
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0)// 0, aponta para o proto do avo
console.log(filho.attr1)// A
console.log(filho.attr2)// B
console.log(filho.attr3)// C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax} Km/h`   
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 // shadowing, vai sombrear a variavel do objecto carro
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`// Super é usado para chamar o metodo do prototype
    }
}

Object.setPrototypeOf(ferrari, carro)//Especificar o prototype, carro é um prototipo de ferrari
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())

