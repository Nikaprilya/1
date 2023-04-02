const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button")
const timerEl = document.getElementById("span");

buttonEl.addEventListener('click', function() {
    timeMinut = parseInt(inputEl.value)
})

timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        clearInterval(span);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerEl.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

