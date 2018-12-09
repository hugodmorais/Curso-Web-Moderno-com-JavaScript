function teste1(num) {
    if(num > 7)
        console.log(num)//Não usando chaves na utilização do if apenas a primeira sentença é considerada
        console.log('Final')
}

teste1(6)//Retorna Final, a primeira linha é ignorada visto ser false no if
teste1(8)//Retorna 8 e Final, sendo o if true, aceita a primeira sentença e segunda sentença

function teste2(num) {
    if(num > 7); {//Codigo errado, ; mal usado, não usar dentro das estruturas de controle
        console.log(num)
    }
}
//O ; separa as sentenças, não sendo considerado
teste2(6)//Imprime o 6
teste2(8)//Imprime o 8