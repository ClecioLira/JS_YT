// Criar uma função que exibe a quatidade de * que aquela linha possui

exibirAsterisco(6)

function exibirAsterisco(linhas) {
    let padrao = ''

    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*'
        console.log(padrao)
    }
}