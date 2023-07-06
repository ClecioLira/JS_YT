// Introdução a arrays
const numeros = [1, 2, 3, 2]
const marcas = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
]

// Add novos elementos
// Inicio
numeros.unshift(0)
// Meio
//        Indice/Remover/Adicionar
numeros.splice(2, 0, 'a')
// Final
numeros.push(4)


// Encontrar elementos
// Primitivo
console.log(numeros.indexOf(2))
console.log(numeros.lastIndexOf(2))
// Referência
const achar = marcas.find(function (marca) {
    return marca.name === 'b'
})
console.log(achar)


// Remover elementos


// Verificar se existe
console.log(numeros.includes(0))


// Dividir elementos
// Dividir arrays
// Combinar arrays


console.log(numeros)