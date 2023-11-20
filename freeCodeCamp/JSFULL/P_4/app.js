let fruit = ['apple', 'orange', 'apple', 'orange', 'orange'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

function fruitShort() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === 'apple') {
            appleShelf.textContent += 'apple ';
        } else if (fruit[i] === 'orange') {
            orangeShelf.textContent += 'orange ';
        }
    }
}
fruitShort();