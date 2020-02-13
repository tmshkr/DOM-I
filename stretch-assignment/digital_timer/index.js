const buttons = document.querySelectorAll("button");
const digit = document.querySelectorAll(".digit");
const digits = document.querySelector(".digits");
const input = document.querySelector("input");
const start = buttons[0];
const reset = buttons[1];

let t;
let interval;
let limit = 10000;

start.onclick = startTimer;
reset.onclick = resetTimer;

function resetTimer() {
  clearInterval(interval);
  digits.classList.remove("greenDigit", "redDigit");
  digit[0].innerText = "-";
  digit[1].innerText = "-";
  digit[3].innerText = "-";
  digit[4].innerText = "-";
  limit = 10000;
  input.value = "";
  start.disabled = false;
}

function startTimer() {
  if (input.value > 0 && input.value < 100) {
    limit = input.value * 1000;
  } else {
    limit = 10000;
    input.value = "";
  }

  t = Date.now();
  start.disabled = true;
  digits.classList.add("greenDigit");
  interval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const dt = Date.now() - t;

  if (dt >= limit) {
    clearInterval(interval);
    digit[0].innerText = Math.floor(limit / 10000) % 10;
    digit[1].innerText = Math.floor(limit / 1000) % 10;
    digit[3].innerText = Math.floor(limit / 100) % 10;
    digit[4].innerText = Math.floor(limit / 10) % 10;
    digits.classList.add("redDigit");
  } else {
    digit[0].innerText = Math.floor(dt / 10000) % 10;
    digit[1].innerText = Math.floor(dt / 1000) % 10;
    digit[3].innerText = Math.floor(dt / 100) % 10;
    digit[4].innerText = Math.floor(dt / 10) % 10;
  }
}
