const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

setInterval(changeSlide, 4000);

window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});