function tratarErroELancar(erro) {
    //throw new Error('Ocorreu um erro...')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }//O erro pode retornar um objeto
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')//Mesmo dando erro irá apresentar a msg
    }
}

const obj = { nome: 'Hugo'}
imprimirNomeGritado(obj)