const a = { name: "Hugo"}

console.log(a)//Imprime chave e atributo do objeto a

const b = a/* --a-- é o objeto mas ele não armazena nada, ele é o endereço do armazenamento dos atributos
ou seja, o objeto b neste momento passa a ser igual a "a", é um endereço. É uma atribuição por referência*/

b.name = 'Joaquim'

console.log(a)//Objeto "a" agora imprime { name: 'Joaquim' } que foi alterado por "b"

let c = 3

let d = c//Como a variavel c armazena um tipo primitivo, não é o endereço que é copiado mas sim o valor

d++//Incrementando "d"
console.log(d)//Imprime 4
console.log(c)//Imprime 3

let valor //Não foi inicializada
console.log(valor)//Por isso imprime undefined

valor = null //Foi definida a variável porém foi atribuido como null, não aponta para nenhum local de memória

//console.log(valor.toString()) Vai dar erro

const produto = {}
console.log(produto.preco)//Undefined pois produto está definido mas o atributo preco não está

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //Evitar atribuir o undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null //Especificar que o produto não tem preco definido, diferente do zero

console.log(produto)




          