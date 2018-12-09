function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function seForVerdadeEuFAlo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFAlo()//False
seForVerdadeEuFAlo(null)//False
seForVerdadeEuFAlo(undefined)//False
seForVerdadeEuFAlo(NaN)//False
seForVerdadeEuFAlo('')//False
seForVerdadeEuFAlo(0)//False
seForVerdadeEuFAlo(-1)//True retorna o console da function
seForVerdadeEuFAlo(' ')//True retorna o console da function
seForVerdadeEuFAlo('?')//True retorna o console da function
seForVerdadeEuFAlo([])//True retorna o console da function
seForVerdadeEuFAlo([1, 2])//True retorna o console da function
seForVerdadeEuFAlo({})//True retorna o console da function