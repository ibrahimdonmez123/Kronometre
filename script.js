const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStopwatch() {
  interval = setInterval(() => {
    milliseconds += 10;
    if (milliseconds == 1000) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    updateStopwatch();
  }, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateStopwatch();
}

function updateStopwatch() {
  minutesEl.textContent = padTime(minutes);
  secondsEl.textContent = padTime(seconds);
  millisecondsEl.textContent = padTime(milliseconds / 10);
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener('click', () => {
  startStopwatch();
  startBtn.classList.add('disabled');
  stopBtn.classList.remove('disabled');
});

stopBtn.addEventListener('click', () => {
  stopStopwatch();
  stopBtn.classList.add('stopped');
startBtn.classList.remove('stopped');
});

resetBtn.addEventListener('click', () => {
resetStopwatch();
});