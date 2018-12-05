var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)//Resultado 2
}

console.log('fora =', numero)//Resultado 2, ou seja, var é global e é alterado mesmo a sua alteração sendo dentro de um bloco

