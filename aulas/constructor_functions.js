// Função de construtor
// faz a mesma coisa da factory function porem de modo diferente]


// pascal case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function () {
        console.log("Fazendo ligação...")
    }
}

//              Cria o novo objeto
const celular = new Celular('Asus', 5.5, 5000)

console.log(celular)
