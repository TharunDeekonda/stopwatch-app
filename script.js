let startTime, interval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let elapsed = 0;

startBtn.addEventListener("click", () => {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsed;
  interval = setInterval(updateTime, 10); // update every 10ms
});

stopBtn.addEventListener("click", () => {
  if (!running) return;
  running = false;
  clearInterval(interval);
  elapsed = Date.now() - startTime;
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  elapsed = 0;
  display.textContent = "00:00:00.000";
});

function updateTime() {
  const now = Date.now();
  const diff = now - startTime;

  let milliseconds = diff % 1000;
  let seconds = Math.floor((diff / 1000) % 60);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let hours = Math.floor(diff / (1000 * 60 * 60));

  display.textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMs(milliseconds)}`;
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

function padMs(n) {
  return n.toString().padStart(3, "0");
}
