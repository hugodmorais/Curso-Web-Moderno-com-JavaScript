function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())//Return R$18, ou seja, o global.preco está disponivel pois foi declarado como this, o this global
console.log(produto.getPreco())//Return R$3825, como não foram passados parametros, ele assume os definidos no objeto

const carro = { preco: 4989, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro, [0.17, '$']))//Diferença na forma de passar os parâmetros entre call e apply
