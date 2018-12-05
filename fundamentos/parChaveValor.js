//par  nome/valor
const saudacao = 'Opa'// contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

console.log(saudacao)// Retorna Opa

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(exec())// Retorna Falaaa
console.log(cliente)//Retorna todos os campos do objeto
console.log(cliente.endereco.numero)//Retorna 123