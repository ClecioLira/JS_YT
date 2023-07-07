const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

// Combinar
const combinado = [...primeiro, 'a b c', ...segundo]
console.log(combinado)

// Clonar
const clonado = [...combinado]
console.log(clonado)