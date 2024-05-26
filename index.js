const slider = document.querySelector(".slider");
const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");

buttonRight.addEventListener("click", () => {
  console.log("click");
  slider.style.overflow = "visible";
  slider.style.transform = "translate(-100vw)";
});
buttonLeft.addEventListener("click", () => {
  slider.style.overflow = "hidden";
  slider.style.transform = "translate(0vw)";
});
