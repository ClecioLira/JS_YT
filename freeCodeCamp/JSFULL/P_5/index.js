const container = document.getElementById('box');
container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
    container.innerHTML += "<p>Thanks you for buying!</p>"
}