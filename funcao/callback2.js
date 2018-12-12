const notas = [7.7, 6.7, 7.5, 3.5, 8.9, 3.8]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)