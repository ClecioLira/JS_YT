// variaveis
let btn = document.querySelector('#nova-frase')
let frase = document.querySelector('.frases')
let person = document.querySelector('.person')

const frases = [
    {
        frase: 'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.',
        person: 'William Shakespeare'
    }, {
        frase: 'Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido.',
        person: 'Fernando Pessoa'
    }, {
        frase: 'O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e cabe na cama e no colchão de amar. O amor é grande e cabe no breve espaço de beijar.',
        person: 'Carlos Drummond de Andrade'
    }, {
        frase: 'Quanto mais nos elevamos, menores parecemos aos olhos daqueles que não sabem voar.',
        person: 'Friedrich Nietzsche'
    }, {
        frase: 'Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento.',
        person: 'Clarice Lispector'
    }, {
        frase: 'Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples, você pode encontrá-la e deixá-la ir embora por não perceber sua simplicidade.',
        person: 'Martha Medeiros'
    }, {
        frase: 'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.',
        person: 'Clarice Lispector'
    }, {
        frase: 'Todo mundo é capaz de dominar uma dor, exceto quem a sente.',
        person: 'William Shakespeare'
    }, {
        frase: 'A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez.',
        person: 'Friedrich Nietzsche'
    }, {
        frase: 'A amizade é um amor que nunca morre.',
        person: 'Mario Quintana'
    }, {
        frase: 'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
        person: 'Carlos Drummond de Andrade'
    }, {
        frase: 'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.',
        person: 'Oscar Wilde'
    }, {
        frase: 'Tão bom morrer de amor! E continuar vivendo...',
        person: 'Mario Quintana'
    }, {
        frase: 'Tudo vale a pena quando a alma não é pequena.',
        person: 'Fernando Pessoa'
    }, {
        frase: 'O que não provoca minha morte faz com que eu fique mais forte.',
        person: 'Friedrich Nietzsche'
    }, {
        frase: 'Tenho em mim todos os sonhos do mundo.',
        person: 'Fernando Pessoa'
    }, {
        frase: 'A saudade é o que faz as coisas pararem no tempo.',
        person: 'Mario Quintana '
    }, {
        frase: 'O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem.',
        person: 'Antoine de Saint-Exupéry'
    }, {
        frase: 'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.',
        person: 'Machado de Assis'
    }, {
        frase: 'Aceita o conselho dos outros, mas nunca desistas da tua própria opinião.',
        person: 'William Shakespeare'
    }, {
        frase: 'Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o caso escrito.',
        person: 'Machado de Assis'
    }, {
        frase: 'Feliz aquele que transfere o que sabe e aprende o que ensina.',
        person: 'Cora Coralina'
    }, {
        frase: 'Amar não é olhar um para o outro, é olhar juntos na mesma direção.',
        person: 'Antoine de Saint-Exupéry'
    }, {
        frase: 'Só se vê bem com o coração, o essencial é invisível aos olhos.',
        person: 'Antoine de Saint-Exupéry'
    }, {
        frase: 'O passado não reconhece o seu lugar: está sempre presente...',
        person: 'Mario Quintana'
    }, {
        frase: 'Há noites que eu não posso dormir de remorso por tudo o que eu deixei de cometer.',
        person: 'Mario Quintana'
    }
];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * frases.length);

    frase.innerText = frases[random].frase
    person.innerText = frases[random].person
})