// DOM manipulation

// getElementById() Seleciona pelo ID
const title = document.getElementById('main-heading')
console.log(title)

// getElementyByClassName() Seleciona pela CLASSE
const  listItem = document.getElementsByClassName('list-items')
console.log(listItem)

// getElementByTagName() Seleciona pelo nome da tag
const listItems = document.getElementsByTagName('li')
console.log(listItems)

//querySelector() Seleciona tanto pelo ID, CLASSE e TAG
const container = document.querySelector('div')
console.log(container)