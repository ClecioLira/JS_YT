// DOM manipulation
// Event Delegation
// It allow users to apprend a SINGLE event listener to a parent element that adds it to all of its present AND future descendantes that match a selector

document.querySelector('#esportes').addEventListener('click', e => {
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target

    if (target.matches('#futebol')) target.style.backgroundColor = 'yellow'
    if (target.matches('#basquete')) target.style.backgroundColor = 'orange'
    if (target.matches('#boxe')) target.style.backgroundColor = 'red'
    if (target.matches('#tenis')) target.style.backgroundColor = 'lightblue'
    if (target.matches('#golf')) target.style.backgroundColor = 'lightgreen'
    if (target.matches('#rugby')) target.style.backgroundColor = 'pink'
})

const sports = document.querySelector('#esportes')
const newSport = document.createElement('li')

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport)