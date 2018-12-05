const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()//O var não é respeitado dentro do laço, ele vale para toda a window
funcs[8]()