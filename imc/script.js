//calculadora imc que tem algo nela que parece naoe star certo e.e






function Calculo(){
    let pes =  parseFloat(document.getElementById("peso").value)
    let alt = parseFloat(document.getElementById("altura").value)
    
    let result = pes/(alt*alt);

    if(result <"18.0"){
      document.getElementById("resposta").innerHTML="Abaixo do Peso";
    }else if(result >="18.6" && result <"24.9"){
        document.getElementById("resposta").innerHTML="Peso Ideal";
    }else if(result >="25.0" && result <"29.9"){
        document.getElementById("resposta").innerHTML="Levemente a cima do peso";
    }
    else if(result >="30.0" && result <"34.9"){
        document.getElementById("resposta").innerHTML="Obesidade grau 1";
    }else if(result >="35.0" && result <"39.9"){
        document.getElementById("resposta").innerHTML="Obesidade grau 2";
    }else if(result >"40.0"){
        document.getElementById("resposta").innerHTML="Obesidade grau 3 / Morbida";
    }else{
        document.getElementById("resposta").innerHTML=""
    }
}


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

