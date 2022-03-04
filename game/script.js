const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const arrColors = [
  "#2FB33F",
  "#BC317A",
  "#E78D3C",
  "#E7453C",
  "#423AA1",
  "#289976",
  "#6394CB",
  "#792D9A",
];

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setTime(time);
  createRandomCircle();
  setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.textContent = `00:${value}`;
}

function createRandomCircle() {
  const circle = document.createElement("div");

  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  const circleColor = getRandomColor();
  circle.style.backgroundColor = circleColor;



  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * arrColors.length);
  return arrColors[index];
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
}
