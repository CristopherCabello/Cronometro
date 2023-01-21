let seconds = 0;
let tens = 0;
let mins = 0;
let hour = 0;
let getHour = document.querySelector(".hour");
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".mins");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  hour = "00";
  seconds = "00";
  mins = "00";
  getHour.innerHTML = hour;
  getMins.innerHTML = mins;
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    getMins.innerHTML = "0" + mins;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (mins <= 9) {
    getMins.innerHTML = "0" + mins;
  }
  if (mins > 9) {
    getMins.innerHTML = mins;
  }
  if (mins > 59) {
    hour++;
    getHour.innerHTML = "0" + hour;
    mins = 0;
    getMins.innerHTML = "0" + 0;
  }
  if(hour <=9){
    getHour.innerHTML='0'+hour;
  }
  if(hour>9){
    getHour.innerHTML = hour;
  }
  
}
