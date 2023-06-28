// maneira ruim de fazer isso
// console.log("estou aprendendor")
// console.log("estou aprendendor")
// console.log("estou aprendendor")
// console.log("estou aprendendor")
// console.log("estou aprendendor")


// 1.FOR
// 2.WHILE
// 3.DO... WHILE
// 4.FOR... IN
// 5.FOR... OF

// for in é bom para interamento de objetos e arrays

const pessoa = {
    nome: "Clecio", //nome: key, Clecio: value
    idade: 21
}

// chave vem de key-value
for (let chave in pessoa) {
    console.log(chave)
}

const cores = ["vermelho", "azul", "verde"]

// indice corresponde ao indices do array
for (let indice in cores) {
    console.log(indice, cores[indice])
}