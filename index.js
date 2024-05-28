const divForShadow = document.querySelector(".divForShadow");

// let x = divForShadow.getBoundingClientRect().left;
// let y = divForShadow.getBoundingClientRect().top;
// console.log(x, y);
// placeDiv(x, y);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    location.href = "#slide1";
  } else if (event.key === "ArrowRight") {
    location.href = "#slide2";
  }
});
// console.log(divForShadow.getBoundingClientRect().top);
// function placeDiv(x_pos, y_pos) {
//   let d = document.querySelector(".buttons");
//   //   d.style.position = "absolute";
//   d.style.left = x_pos + 36 + "px";
//   d.style.top = y_pos - 10 + "px";
// }
// window.addEventListener("resize", () => {
//   let x = divForShadow.getBoundingClientRect().left;
//   let y = divForShadow.getBoundingClientRect().top;
//   console.log(x, y);
//   placeDiv(x, y);
// });
