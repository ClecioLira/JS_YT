// Funcões de fábrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Iphone XR', 5.5, 4000)
const celular2 = criarCelular('Xiaomi Note 10', 8.8, 5000)
console.log(celular1, celular2)
