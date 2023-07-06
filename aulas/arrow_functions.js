const marcas = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]
// Disso
// const achar = marcas.find(function (marca) {
//     return marca.name === 'b'
// })
// console.log(achar)

// Para isso
console.log(marcas.find(marca => marca.name === 'b'))


const soma = (n1, n2) => {return n1 + n2}
console.log(soma(5, 8))

const nome = name => {return name}
console.log(nome('Clécio'))