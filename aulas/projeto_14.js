// Crie uma array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

// Primeira opção
let faixas = [
    {tooltip: 'Até 700', minimo: 0, maximo: 700},
    {tooltip: 'de 700 a 1000', minimo: 700, maximo: 1000},
    {tooltip: 'de 1000 ou mais', minimo: 1000, maximo: 9999999},
]

// Segunda opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixa2 = [
    criaFaixaPreco('a', 0, 700),
    criaFaixaPreco('b', 700, 1000),
    criaFaixaPreco('c', 1000, 999999)
]
console.log(faixas)
console.log(faixa2)