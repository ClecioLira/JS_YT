let countEl = document.querySelector('#count-el')
let saveEl = document.querySelector('#save-el')
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let saveCount = ` ${count} - `;
    saveEl.textContent += saveCount;

    countEl.textContent = 0;
    count = 0;
}

alert('Conte as pessoas do metrô.')