const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const china = pais => pais.pais == 'China'

    const mulher = genero => genero.genero == 'F' 

    const salarioBaixo = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    } 

    console.log(funcionarios.filter(china).filter(mulher).reduce(salarioBaixo))
})

