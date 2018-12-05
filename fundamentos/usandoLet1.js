var numero = 1//Pode ser let ou var, o resultado será o mesmo
{
    let numero = 2
    console.log('dentro', numero)//Retorna 2, o let apenas é válido dentro do escopo
}

console.log('dentro', numero)//Retorna 1