const openMenu = document.querySelector(".menu-open");
const menu = document.querySelector(".menu-box");

openMenu.onclick = function () {
    menu.classList.toggle("open");
};
