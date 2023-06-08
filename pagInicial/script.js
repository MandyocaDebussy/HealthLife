
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.headline', { delay: 80 });
ScrollReveal().reveal('.headline', { delay: 100 });






/*menu hamburguer*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

