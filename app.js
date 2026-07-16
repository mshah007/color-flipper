let btn = document.querySelector("#btn");
let body = document.body;
btn.addEventListener("click", changeColor);

function changeColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
