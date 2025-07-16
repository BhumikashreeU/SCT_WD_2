let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStopwatch() {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(stopwatch, 1000);
}

function pauseStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  const lap = document.createElement("li");
  lap.innerText = display.innerText;
  document.getElementById("laps").appendChild(lap);
}
