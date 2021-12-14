const btnMenu = document.getElementById("btn-menu");

const menu = document.getElementById("menu");

const closeMenu = document.getElementById("close");

btnMenu.addEventListener("click", (e) => {
  menu.classList.add("show-menu");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("show-menu");
});
