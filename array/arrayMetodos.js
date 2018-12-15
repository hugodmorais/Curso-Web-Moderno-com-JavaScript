const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//Massa saiu do array, remove o ultimo elemento do Array
console.log(pilotos)// Return [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')//Acrescenta o elemento no final do array
console.log(pilotos)// Return [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift()// Remove o primeiro elemento da lista
console.log(pilotos)//Return [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton')//Adiciona um elemento no inicio do Array
console.log(pilotos)// Return [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar ou remover elementos
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')// Adiciona estes elementos a começar na posição 2
console.log(pilotos)// Return [ 'Hamilton','Alonso','Bottas','Massa','Raikkonen','Verstappen' ]

//Remover
pilotos.splice(3, 1)// Elimina um elemento do indice 3(Massa)
console.log(pilotos)// Return [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

//_____________________________________________________________________________________________
const algunsPilotos1 = pilotos.slice(2)// Novo array a partir do indice 2(inclusive)

console.log(algunsPilotos1)//Return [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4)// Novo Array da posição 1(inclusive) até ao indice 4(que não entra)
console.log(algunsPilotos2)// Return [ 'Alonso', 'Bottas', 'Raikkonen' ]
