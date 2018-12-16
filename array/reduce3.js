Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'Joao', nota: 7.93, bolsista: false },
    { nome: 'Kenia', nota: 9.2, bolsista: true },
    { nome: 'Hugo', nota: 9.8, bolsista: false },
    { nome: 'Morais', nota: 8.7, bolsista: true }
]

//Alunos bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))

// Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))