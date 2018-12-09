const notas = [6.7, 6.9, 5.8, 9.0, 6.5, 2.3, 1.2]

for (let i in notas) {//Colocar o let para garantir que o indice i apenas está disponivel dentro do laço
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
