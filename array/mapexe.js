const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.5 }',
    '{ "nome": "Kit de Lapis", "preco": 36.45 }',
    '{ "nome": "Caneta", "preco": 53.45 }'
]

const paraObjeto = json => JSON.parse(json)

const soPreco = produto => produto.preco

const resultadoFinal = carrinho.map(paraObjeto).map(soPreco)

console.log(resultadoFinal)
