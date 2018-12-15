class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const pai = new Pai
const filho = new Filho

console.log(pai)// Return sobrenome: Undefined...
console.log(filho)// Teturn sobrenome Silva...