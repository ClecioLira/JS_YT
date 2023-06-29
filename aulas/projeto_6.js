// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: "Coraline",
    ano : 2009,
    diretor: "Nail Gaiman",
    personagem: "Coraline" 
}

exibirStrings(filme)

function exibirStrings(objeto) {
    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === "string") {
            console.log(propriedade, objeto[propriedade])
        }
    }
}