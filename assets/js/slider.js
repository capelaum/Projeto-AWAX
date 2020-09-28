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

var pos = 0;

window.onload = () => {

  // for (var i = 0; i < slides.length; i++) {
  //   slides[i].style.width = slideWidth + "px";
  //   slidesTeam[i].style.width = slideWidthTeam + "px";
  //   slidesTestimonial[i].style.width = slidesTestimonial + "px";
  //   slidesPremium[i].style.width = slidesPremium + "px";
  // }
  
  // passa automaticamente a cada periodo
  setInterval(passarSlide, 5000);
};

function passarSlide() {

  if (pos >= 2) {
    pos = 0;

    sliders[0].style.marginLeft = "-" + slideWidth * 0 + "px";
    slidersTeam[0].style.marginLeft = "-" + slideWidthTeam * 0 + "px";
    slidersTestimonial[0].style.marginLeft = "-" + slideWidthTestimonial * 0 + "px";
    slidersPremium[0].style.marginLeft = "-" + slideWidthPremium * 0 + "px";
  }
  else {
    pos++;

    sliders[0].style.marginLeft = "-" + slideWidth * pos + "px";
    slidersTeam[0].style.marginLeft = "-" + slideWidthTeam * pos + "px";
    slidersTestimonial[0].style.marginLeft = "-" + slideWidthTestimonial * pos + "px";
    slidersPremium[0].style.marginLeft = "-" + slideWidthPremium * pos + "px";
  }

  // console.log("posicao: ", pos);

  removeActive(pointers);
  
  pointers[pos].classList.add("active");
  pointers[pos+3].classList.add("active");
  pointers[pos+6].classList.add("active");
  pointers[pos+9].classList.add("active");
  
}

function mudarSlide(e) {

  removeActive(pointers);
  e.classList.add("active");

  passarSlide();

}

function removeActive(pointers) {
  pointers.forEach((pointer, pointerIndex) => {
    if (pointer.classList.contains("active"))
      pointer.classList.remove("active");
  });
}
