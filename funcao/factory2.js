// Factory simples
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 200.12))
console.log(criarProduto('TV', 10.1))
console.log(criarProduto('iPad', 40.40))