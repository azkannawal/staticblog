const first = document.querySelector(".appear");
const second = document.querySelector(".disappear");
first.addEventListener("click", handler1);
second.addEventListener("click", handler2);
function handler1() {
  first.classList.toggle("hidden");
  second.classList.toggle("hidden");
}
function handler2() {
  first.classList.toggle("hidden");
  second.classList.toggle("hidden");
}
