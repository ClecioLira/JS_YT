// Igualdade de objetos

function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('Felix Amaro', 'Arcoverde', 56515320)
const endereco2 = new Endereco('F', 'Arcoverde', 56520147)

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2))


function temEnderecoNaMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2
}
console.log(temEnderecoNaMemoriaIguais(endereco1, endereco2))