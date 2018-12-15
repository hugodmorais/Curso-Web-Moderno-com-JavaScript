Array.prototype.map2 = function(callback) {
    const newArray = []
    for ( let i = 0; i < this.length; i++ ) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.5 }',
    '{ "nome": "Kit de Lapis", "preco": 36.45 }',
    '{ "nome": "Caneta", "preco": 53.45 }'
]

// Exercise

const paraObjeto = json => JSON.parse(json)//Converte o texto para objeto

let apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)