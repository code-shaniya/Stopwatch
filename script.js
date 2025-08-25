const hourText = document.getElementById('hour')
const minuteText = document.getElementById('minute')
const secondText = document.getElementById('second')
const miliSecondText = document.getElementById('milisecond')

const resetButton = document.getElementById('resetButton');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');

resetButton.addEventListener('click', reset);
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);

let interval = null;
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

function reset() {
  changeButtonColor('reset')
  clearInterval(interval);
  interval = null;
  milisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  updateDisplay();
}

function start() {
  changeButtonColor('start')
  
  if (interval) return;
  
  interval = setInterval(() => {
    milisecond++;
    
    if (milisecond > 99) {
      milisecond = 0;
      second++;
    }
    
    if (second > 59) {
      second = 0;
      minute++;
    }
    
    if (minute > 59) {
      minute = 0;
      hour++;
    }
    updateDisplay()
  }, 10)
}

function pause() {
  changeButtonColor('pause')
  clearInterval(interval);
  interval = null;
}

function updateDisplay() {
  miliSecondText.textContent = milisecond < 10 ? '0' + milisecond : milisecond;
  secondText.textContent = second < 10 ? '0' + second : second;
  minuteText.textContent = minute < 10 ? '0' + minute : minute;
  hourText.textContent = hour < 10 ? '0' + hour : hour;
}

function changeButtonColor(buttonName) {
  resetButton.classList.remove('active-button')
  startButton.classList.remove('active-button')
  pauseButton.classList.remove('active-button')
  
  document.getElementById(buttonName + 'Button')
  .classList.add('active-button')
}