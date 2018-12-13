function Pessoa(nome) {

    this.nome = 'Hugo'
    
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const hugo = new Pessoa

hugo.falar()



