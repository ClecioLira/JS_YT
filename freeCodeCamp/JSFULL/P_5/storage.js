//? localStorage
//! Todo valor é transformado em string
// 1 - inserir dados  
//               nome da chave - valor
localStorage.setItem('name', 'Clécio');

// 2 - restart sem perder os dados

// 3 - resgatar item
// coloca numa variavel
//               nome da chave que foi setada no localStorage
const name = localStorage.getItem('name');

// 4 - resgate de item que não existe
//             se o item não existir ele vai retornar o valor null
const lastName = localStorage.getItem('lastName');

// 5 - remover item
localStorage.removeItem('name');

// 6 - limpar todos os items do local storage
localStorage.clear();


//? sessionStorage
// 1 - inserir dados
//               nome da chave - valor
sessionStorage.setItem('number', 123)

// 2 reiniciar e perder dados

// 3 - resgatar item
// coloca numa variavel
//               nome da chave que foi setada no sessionStorage
const number = sessionStorage.getItem('number');

// 4 - remover item
sessionStorage.removeItem('number');

// 5 - limpar todos os items do local storage
sessionStorage.clear();

//* SALVAR OBJETO
const person = {
    name: 'Clécio',
    age: 22,
    city: 'Arcoverde'
};
// transformou o objeto person em uma string
localStorage.setItem('person', JSON.stringify(person));
const getPerson = localStorage.getItem('person');

// transformou em objeto novamente
const personObj = JSON.parse(getPerson);