const alunos = [
    { nome: 'Joao', nota: 7.93, bolsista: false },
    { nome: 'Kenia', nota: 9.2, bolsista: true },
    { nome: 'Hugo', nota: 9.8, bolsista: false },
    { nome: 'Morais', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))// Return [ 7.93, 9.2, 9.8, 8.7 ]

const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    return acumulador + atual// Vai percorrendo elemento a elemento e vai somando
}, 100)// Depois do callback posso definir um valor inicial, no caso 100

console.log(resultados)// Return 135.63, que é a soma de todas as notas do Array mais o valor inicial que foi 100