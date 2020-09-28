// Pega os elementos em que os slides estao inseridos
var sliders = document.getElementsByClassName("sliders")
var slidersTeam = document.getElementsByClassName("sliders-team")
var slidersTestimonial = document.getElementsByClassName("sliders-testimonials")
var slidersPremium = document.getElementsByClassName("sliders-premium")

// Pega os elementos slides
var slides = document.getElementsByClassName("slide");
var slidesTeam = document.getElementsByClassName("slide-team");
var slidesTestimonial = document.getElementsByClassName("slide-testimonials");
var slidesPremium = document.getElementsByClassName("slide-premium");

// Pega os comprimentos de cada slide
var slideWidth = document.querySelector(".slide").offsetWidth;
var slideWidthTeam = document.querySelector(".slide-team").offsetWidth;
var slideWidthTestimonial = document.querySelector(".slide-testimonials").offsetWidth;
var slideWidthPremium = document.querySelector(".slide-premium").offsetWidth;

const pointers = document.querySelectorAll(".pointer");
var pos = 0, repeater;


window.onload = autoSlide(true);

function autoSlide (restart){

   if (restart){   // if r is true then clear and restart the timer
    clearInterval(repeater); // clear the timer
    repeater = setInterval(function (){ // start the timer
      passarSlide(); 
    }, 5000);
  } else {
    clearInterval(repeater); // clear and stop the timer if r isn't true
  }
}

const updateSlide = (pos) => {
  
  sliders[0].style.marginLeft = "-" + slideWidth * pos + "px";
  slidersTeam[0].style.marginLeft = "-" + slideWidthTeam * pos + "px";
  slidersTestimonial[0].style.marginLeft = "-" + slideWidthTestimonial * pos + "px";
  slidersPremium[0].style.marginLeft = "-" + slideWidthPremium * pos + "px";
  
  numeroSlides = 3;

  pointers[pos].classList.add("active");
  pointers[pos + numeroSlides].classList.add("active");
  pointers[pos + numeroSlides].classList.add("active");
  pointers[pos + numeroSlides].classList.add("active");
}


function passarSlide() {

  removeActive(pointers);

  if (pos >= 2) {
    pos = 0;
    updateSlide(pos);
  }
  else {
    pos++;
    updateSlide(pos);
  }

  // console.log("posicao: ", pos);
  
}

function mudarSlide(e) {

  autoSlide(true);

  if (!e.classList.contains("active")) {
    
    removeActive(pointers); 

    if(e === pointers[0] || e === pointers[3] || e === pointers[6] || e === pointers[9]){
      pos = 0;
      updateSlide(pos);
      // console.log("Caso Posicao 0");
    }

    if(e === pointers[1] || e === pointers[4] || e === pointers[7] || e === pointers[10]){
      pos = 1;
      updateSlide(pos);
      // console.log("Caso Posicao 1");
    }

    if(e === pointers[2] || e === pointers[5] || e === pointers[8] || e === pointers[11]){
      pos = 2;
      updateSlide(pos);
      // console.log("Caso Posicao 2");
    }
  }
}

function removeActive(pointers) {
  pointers.forEach((pointer, pointerIndex) => {
    if (pointer.classList.contains("active"))
      pointer.classList.remove("active");
  });
}
