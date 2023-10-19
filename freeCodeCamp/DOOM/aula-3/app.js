// DOM manipulation
// Reveal Event

const revealBtn = document.querySelector('.btn')
const hiddenContent = document.querySelector('.texto')

function revealContent() {
    if(hiddenContent.classList.contains('btn')) {
        hiddenContent.classList.remove('btn')
    } else {
        hiddenContent.classList.add('btn')
    }
}

revealBtn.addEventListener('click', revealContent)