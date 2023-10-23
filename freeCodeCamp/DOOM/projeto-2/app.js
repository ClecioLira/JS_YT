// Variáveis
let openBtn = document.querySelector('#btn-open')
let modalContainer = document.querySelector('#modal-container')
let closeBtn = document.querySelector('#close-btn')

// Event Listeners
openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'

})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

window.addEventListener('click', e => {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})