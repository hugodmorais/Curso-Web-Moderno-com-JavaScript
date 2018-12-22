// não aceita repetição/não indexada
const times = new Set()

times.add('Vasco')
times.add('Sao P').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)//Set { 'Vasco', 'Sao P', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size)// 5
console.log(times.has('Vasco'))// True
console.log(times.has('vasco'))// False
times.delete('Flamengo')
console.log(times.has('Flamengo'))// False, foi apagado

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
