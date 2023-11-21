const box = document.querySelector(".box");
const nobox = document.querySelector(".nobox");

box.addEventListener("click", function () {
  box.classList.toggle("hidden");
  nobox.classList.toggle("hidden");
});

nobox.addEventListener("click", function () {
  box.classList.toggle("hidden");
  nobox.classList.toggle("hidden");
});
