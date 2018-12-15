Array.prototype.forEach2 = function(call) {
    for ( let i = 0; i < this.length; i++ ) {
        call(this[i], i, this)
    }
}

const aprovados = ['Hugo', 'Morais', 'Daniel', 'Rodrigues']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})