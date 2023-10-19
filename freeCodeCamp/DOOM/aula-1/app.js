// DOM manipulation

// // getElementById() Seleciona pelo ID
// const title = document.getElementById('main-heading')
// console.log(title)

// // getElementyByClassName() Seleciona pela CLASSE
// const  listItem = document.getElementsByClassName('list-items')
// console.log(listItem)

// // getElementByTagName() Seleciona pelo nome da tag
// const listItems = document.getElementsByTagName('li')
// console.log(listItems)

// //querySelector() Seleciona o primeiro item encontrado tanto pelo ID, CLASSE e TAG
// const container = document.querySelector('div')
// console.log(container)

// //querySelectorAll() Seleciona todos pelo ID, CLASSE e TAG
// const containers = document.querySelectorAll('div')
// console.log(container)

// Acessar prioridades do CSS em JS
const title = document.querySelector('#main-heading')
title.style.color = 'red'

const listItems = document.querySelectorAll('.list-items')
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '25px'
}

// Criar elementos
