function Pessoa() {
    this.idade = 0

    const self = this//Armazena o this dentro de uma constante e assim pode usar em todo o código
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 4000)//Pode-se usar o bind em vez de declarar a constante
}

new Pessoa