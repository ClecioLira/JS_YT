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
//Final
numeros.pop()
// Inicio
numeros.shift()
// Meio
numeros.splice(2, 1)


// Verificar se existe
console.log(numeros.includes(0))


// Esvaziar um array
// Metodo 1
//numeros.length = 0
// Metodo 2
//numeros.splice(0, numeros.length)


// Combinar arrays
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]
const juntar = primeiro.concat(segundo)
console.log(juntar)


// Dividir arrays
//                         Indice
const divdir = juntar.slice(0, 3)
console.log(divdir)



console.log(numeros)
