// DOM manipulation
// Event Listeners

// element.addEventListener('click', function)

const buttonTwo = document.querySelector('.btn-2')

function alertBtn() {
    alert('I also love js')
}
buttonTwo.addEventListener('click', alertBtn)

// Mouseover
const newBackgroundColor = document.querySelector('.btn-3')

function chanceBgColor() {
    newBackgroundColor.style.backgroundColor = 'red'
}
newBackgroundColor.addEventListener('mouseover', chanceBgColor)