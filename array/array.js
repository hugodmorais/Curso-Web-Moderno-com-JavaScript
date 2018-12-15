console.log(typeof Array, typeof new Array, typeof [])// Function---Object---Object

let aprovados = new Array('Hugo', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Hugo', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// Undefined

aprovados[3] = 'Paulo'// Mais usado para alterar valor
console.log(aprovados[3])
aprovados.push('Abia')// Mais usado para adicionar campos
console.log(aprovados.length)
console.log(aprovados[4])

aprovados[9] = 'Morais'// Adiciona no indice 9, neste caso, indice 5,6,7,8 retornam undefined
console.log(aprovados.length)// Return 10

console.log(aprovados[8] === undefined)// True

console.log(aprovados)// Return [ 'Hugo','Carlos','Ana','Paulo','Abia',<4 empty items>,'Morais' ]

aprovados.sort()// Ordena o Array [ 'Abia','Ana','Carlos','Hugo','Morais','Paulo',<4 empty items> ]
console.log(aprovados)

delete aprovados[1]

console.log(aprovados)// [ 'Abia',<1 empty item>,'Carlos','Hugo','Morais','Paulo',<4 empty items> ]
// Apagu o indice 1, este campo fica vazio mas não é reordenado

//-------------------------------------------------------------------------------------------------

aprovados = ['Hugo', 'Carlos', 'Ana']
aprovados.splice(1, 1)//Apaga o campo que vai da posição 1 até a posição 1, ou seja, o Carlos, para apagar a Ana também colocaria  (1, 2)
console.log(aprovados)

aprovados = ['Hugo', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')//Apaga o s elementos do 1 ao 2 e adiciona elementos do 1 ao 2
console.log(aprovados)// Return [ 'Hugo', 'Elemento1', 'Elemento2' ]

aprovados.splice(1, 0, 'Morais')// Não apaga nenhum elemento, só adiciona este novo elemento no indice 1
console.log(aprovados)