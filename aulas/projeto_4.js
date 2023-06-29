// Velocidade maxima de até 70km
// a cada 5km acima do limite você ganha 1 ponto
// caso pontos maior que 12 = "Carteira Suspendida"

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const KMporPonto = 5

    if (velocidade <= velocidadeMaxima) { return
        console.log("Ok!")
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / KMporPonto)
        if (pontos >= 12) {
            console.log("Carteira Suspendida!")
        } else {
            console.log("Pontos", pontos)
        }
    }
}
