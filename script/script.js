console.log("working perfectly")


var timerContent = document.getElementById('timer')
var startButton = document.getElementById('start-button')
var stopButton = document.getElementById('stop-button')
var resetButton = document.getElementById('reset-button')

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

var miliseconds = 0
var seconds = 0
var minute = 0

function formatNumber(num) {
    if (num <= 9) {
        return '0' + num
    } else {
        return num
    }
}

let timeChanger

function startTimer() {
    timeChanger = setInterval(function () {
        timerContent.textContent = formatNumber(minute) + ':' + formatNumber(seconds) + ':' + formatNumber(miliseconds)
        if (miliseconds === 99) {
            miliseconds = 0
            seconds += 1
        }
        if (seconds === 59) {
            seconds = 0
            minute += 1
        }
        miliseconds += 1
    }, 10);
}
function stopTimer(){
    clearInterval(timeChanger)
}
function resetTimer(){
    clearInterval(timeChanger)
    miliseconds = 0;
    seconds = 0;
    minute = 0;
    timerContent.textContent = formatNumber(minute) + ':' + formatNumber(seconds) + ':' + formatNumber(miliseconds)
}
