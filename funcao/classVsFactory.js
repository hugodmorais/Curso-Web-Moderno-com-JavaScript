class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: ()=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Hugo')
p2.falar()// Vantagem, não precisa lidar com o this, que pode variar dependendo do contexto léxico.