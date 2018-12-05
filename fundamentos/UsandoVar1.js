{ 
    { 
        { 
            { 
                var sera = 'Será???' 
            } 
        } 
    } 
}
console.log(sera)//var está disponivel dentro e fora do bloco

function teste() {
    var local = 123
    console.log(local)//var está disponivel apenas dentro do bloco
}

teste()

//console.log(local)  ------------ Não está disponivel fora do bloco da função

