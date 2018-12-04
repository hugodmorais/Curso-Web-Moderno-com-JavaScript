const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`//O template suporta quebras de linha
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)//Soma apenas o que está dentro do ${}

const up = texto => texto.toUpperCase()//Função up, retorna o que foi recebido em letras maiusculas
console.log(`Èi... ${up('cuidado')}!`)