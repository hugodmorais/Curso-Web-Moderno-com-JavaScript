const prod1 = {}//Criar um objeto vazio
prod1.nome = 'Celular Ultra Mega'//Incrementar dinamicamente atributos no objeto
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40//Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2//Estrutura aninhada de objetos, por exemplo obj é único dentro de prod2 e o segundo obj é unico dentro do obj
        }
    }
}

console.log(prod2)

'{ "nome": "Camisa Polo", "preco": 79.90 }'//Formato Json



