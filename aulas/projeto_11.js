// Criar um objeto endereço que contem as seguintes informações:
// Rua
// Cidade
// CEP

function exibirEndereco(rua, cidade, CEP) {
    return {
        rua,
        cidade,
        CEP
    }
}

const endereco1 = exibirEndereco("Felix Amaro", "Arcoverde", 56515320)

console.log(endereco1)