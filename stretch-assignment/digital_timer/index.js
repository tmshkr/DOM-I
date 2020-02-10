const buttons = document.querySelectorAll("button");
const digit = document.querySelectorAll(".digit");
const digits = document.querySelector(".digits");
const start = buttons[0];
const reset = buttons[1];

let t;
let interval;

start.onclick = startTimer;

reset.onclick = resetTimer;

function resetTimer() {
  clearInterval(interval);
  digits.classList.remove("redDigit");
  digit[0].innerText = "-";
  digit[1].innerText = "-";
  digit[3].innerText = "-";
  digit[4].innerText = "-";
  start.disabled = false;
}

function startTimer() {
  t = Date.now();
  start.disabled = true;
  interval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const dt = Date.now() - t;

  if (dt >= 10000) {
    clearInterval(interval);
    digit[0].innerText = 1;
    digit[1].innerText = 0;
    digit[3].innerText = 0;
    digit[4].innerText = 0;
    digits.classList.add("redDigit");
  } else {
    digit[0].innerText = 0;
    digit[1].innerText = Math.floor(dt / 1000);
    digit[3].innerText = Math.floor(dt / 100) % 10;
    digit[4].innerText = Math.floor(dt / 10) % 10;
  }
}
