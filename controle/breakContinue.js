const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break//Não responde ao if mas sim ao for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue//O continue vai interromper o laço no indice 5 porém vai continuar no próximo laço, apenas o laço 5 não será apresntado
    }
    console.log(`${y} = ${nums[y]}`)


    externo: for (a in nums) {
        for (b in nums) {
            if(a ==2 && b == 3) break externo//O break utilizado dentro do for interno, porém podemos utilizar um rótulo para chamar esse break no for principal, não aconselhável.
            console.log(`Par = ${a}, ${b}`)
        }
    }
}