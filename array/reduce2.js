const alunos = [
    { nome: 'Joao', nota: 7.93, bolsista: false },
    { nome: 'Kenia', nota: 9.2, bolsista: true },
    { nome: 'Hugo', nota: 9.8, bolsista: false },
    { nome: 'Morais', nota: 8.7, bolsista: true }
]

//Alunos bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
