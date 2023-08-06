const spanEl = document.querySelector(".plus");
const dropMenu = document.querySelector(".drop-menu");
const button = document.querySelector(".btnx");
const barBtn = document.querySelector(".bar");
const line = document.querySelectorAll(".line");
const menulist = document.querySelector(".menu-list");
const plus = document.querySelector(".fa-plus");

spanEl.addEventListener("click", () => {
  dropMenu.classList.toggle("show");
  plus.classList.toggle("rot");
});
barBtn.addEventListener("click", () => {
  menulist.classList.add("show-list");
});

button.addEventListener("click", () => {
  menulist.classList.remove("show-list");
});
