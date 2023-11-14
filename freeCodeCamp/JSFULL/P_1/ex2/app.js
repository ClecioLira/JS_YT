let useName = 'Clécio Lira'
let message = 'Welcome back'
let fullMessage = `${message} ${useName}!`

let welcomeEl = document.querySelector("#welcome-el")
welcomeEl.innerText = fullMessage
welcomeEl.innerText += " 👋"