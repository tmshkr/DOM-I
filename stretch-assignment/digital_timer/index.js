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
  const dt = new Date(Date.now() - t);
  const s = dt.getSeconds();
  const ms = dt.getMilliseconds();

  if (s >= 10) {
    clearInterval(interval);
    digit[0].innerText = 1;
    digit[1].innerText = 0;
    digit[3].innerText = 0;
    digit[4].innerText = 0;
    digits.classList.add("redDigit");
  } else {
    const msString = String(ms);
    digit[0].innerText = 0;
    digit[1].innerText = s;
    digit[3].innerText = msString[0] || 0;
    digit[4].innerText = msString[1] || 0;
  }
}
