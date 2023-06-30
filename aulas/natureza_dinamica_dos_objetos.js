const mouse = {
    cor: 'red',
    marca: 'razer'
}
mouse.velocidade = 5000
mouse.trocarDPI = function () {
    console.log("Mudando DPI")
}

delete mouse.velocidade

console.log(mouse)
 