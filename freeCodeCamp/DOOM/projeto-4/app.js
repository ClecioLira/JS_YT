// botoes
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// valor dos tempos
let seconds = 0
let minutes = 0
let hours = 0

// adicionar um 0 a esquerda quando o numero for menor que 10
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// definir intervalo e status
let timerInterval = null
let timerStatus = 'stopped'

// funcão que faz o cronometro funcionar
function stopWatch() {
    seconds++ // atualiza os segundos

    if (seconds / 60 === 1) { // atualiza os minutos
        seconds = 0
        minutes++

        if (minutes / 60 === 1) { // atualiza as horas
            minutes = 0
            hours++
        }
    }

    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString()
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString()
    } else {
        leadingMinutes = minutes
    }

    if (hours < 10) {
        leadingHours = '0' + hours.toString()
    } else {
        leadingHours = hours
    }

    // altera os valores no timer
    let displayTimer = document.querySelector('#timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
}

// pega os eventos de start e stop no click do botao
startStopBtn.addEventListener('click', function() {
    if (timerStatus === 'stopped') { // nesse nó ele inicia o cronometro
        timerInterval = window.setInterval(stopWatch, 1000)
        document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = 'started'
    } else { // nesse nó ele pausa o cronometro
        window.clearInterval(timerInterval)
        document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped'
    }
})

// pega o evento de click no botao reset e reseta o cronometro
resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0

    document.querySelector('#timer').innerHTML = '00:00:00'

    window.clearInterval(timerInterval)
    document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    timerStatus = 'stopped'
})