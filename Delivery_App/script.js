const mobileMenue = document.querySelector(".mobile__menue");
const navbar = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");

mobileMenue.addEventListener("click", function () {
    navbar.classList.toggle("nav__list--active");
    if (navbar.classList.contains("nav__list--active")) {
        overlay.style.display = "block";
    } else overlay.style.display = "none";
});
