const PC = {
    processador: 'i5',
    RAM: '8gb',
    placaDeVideo: 'Nvidia 860',
    ligar: function () {
        console.log("Ligando...")
    }
}

// Cria um clone do objeto e adiciona novas propriedades sem alterar o objeto original
const novoObjeto = Object.assign({
    gabitene: 'Fortrek'
}, PC)
console.log(novoObjeto)

// spread
const objeto = {... PC}
console.log(objeto)