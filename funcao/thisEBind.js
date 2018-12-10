const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)// A mesma coisa que fazer pessoa.saudacao
    }
}

pessoa.falar()//Retorna Bom dia!

const falar = pessoa.falar
falar()//Conflito de paradigmas: funcional e OO, o this não é acessivel pois está num outro contexto
        // Retorna Undefined


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()// Retorna Bom dia!, o bind usa o parametro pessoa para saber onde o this será chamado