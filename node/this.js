console.log(this === global)// Return false
console.log(this === module)// Return false
console.log(this === module.exports)// Return true
console.log(this === exports)// Return true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)// Return false
    console.log(this === module.exports)// Return false
    console.log(this === global)// Return true, dentro da função ele aponta para global
}

logThis()