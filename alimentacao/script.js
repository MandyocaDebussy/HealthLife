
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.headline', { delay: 50 });
ScrollReveal().reveal('.headline', { delay: 100 });


document.querySelector('#button').style.backgroundColor="#FFCCCB";
document.querySelector('#button').style.borderColor="red"
document.querySelector('#button').style.color="red"

function QuestYes(){
document.getElementById("button2").value;
document.querySelector(".resp").innerHTML="Muito Obrigada!"
}



function QuestNot(){
    document.getElementById("button").value;
    document.querySelector(".resp").innerHTML="Desculpa, vamos melhorar nisto!"

}

/*menuburgue*/
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


