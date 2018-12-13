// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()//Padrão usado para fugir do escopo global, o que é definido dentro da função estará apenas disponivel dentro da função.
// Função anonima