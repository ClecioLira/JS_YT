function verificarEntrada() {
    nome = document.querySelector("#nome").value
    convidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jonathan', 'Clécio']
    if (convidadosCristian.includes(nome)) {
        document.querySelector('#verificando').innerText = 'Você pode entrar!'
    } else {
        document.querySelector('#verificando').innerText = 'Você não pode entrar!'
    }
}