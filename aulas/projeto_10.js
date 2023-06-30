// Criar função para mostrar os números primos

exibirNumeroPrimo(15)

function exibirNumeroPrimo(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        let ePrimo = true

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ePrimo = false
                break
            }
        }

        if (ePrimo) console.log(numero)

    }
}
