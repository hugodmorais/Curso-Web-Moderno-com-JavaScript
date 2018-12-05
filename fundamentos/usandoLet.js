const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()//O let é respeitado dentro do laço, por isso retorna o valor da 3 função
funcs[8]()