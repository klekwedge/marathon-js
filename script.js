const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const clidesCount = mainSlide.querySelectorAll("div").length;
const container =  document.querySelector(".container");

let activeSlideIndex = 0;
sidebar.style.top = `-${(clidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === clidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = clidesCount - 1;
    }
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}
