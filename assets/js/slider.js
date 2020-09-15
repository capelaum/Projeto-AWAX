//* Encapsula Seletores 
const select = (el) => document.querySelector(el);
const all = (el) => document.querySelectorAll(el);

const pointers = document.querySelectorAll('.pointer');
var slideItem = 0;

function addActive(pointers){

  //* Mudar Active Pointer
  pointers.forEach( (pointer, pointerIndex) => {

    if(pointer.classList.contains('active'))
      pointer.classList.remove('active');
    
    // Ao clicar deve mudar o pointer ativo
    pointer.addEventListener( 'click', () => {

        console.log("pointer = ", pointer)
        console.log("pointerIndex = ", pointerIndex)

        pointer.classList.add('active');
    })

  })
}

function removeActive(pointers){

  pointers.forEach( (pointer, pointerIndex) => {
  
    if(pointer.classList.contains('active'))
      pointer.classList.remove('active');
  
  })
}

window.onload = function () {


    var slidewidth = document.getElementById("slideshow-banner").offsetWidth;
    var objs = document.getElementsByClassName("slide");

    console.log("window.onload -> slidewidth = ", slidewidth);

    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + "px";
    }

    // passa automaticamente a cada periodo
    //setInterval(passarSlide, 5000);

}

function passarSlide() {
    var slidewidth = document.getElementById("slideshow-banner").offsetWidth;

    if (slideItem >= 2) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    addActive(pointers);

    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

function mudarSlide(pos) {

    slideItem = pos;

    var slidewidth = document.getElementById("slideshow-banner").offsetWidth;

    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";

    addActive(pointers)
}


/* 
// Seto o valor inicial do slide para 0 //
var slideInicial = 0;
// Chamo a função de exibir slide //
showSlides();
function showSlides() {
  
  // Crio uma variável qualquer para o laço for //
  var i;
  
  // Pego os valores das classes slide e pointer e armazeno nas variaveis sliders e dots //
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  // Faço o laço for e verifico se o display: none; está no css do slide //
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // incrementa o laço para +1 se a condição for aceita //
  slideInicial++;
  
  // Verifico se slideInicial é maior que o tamanho obtido no laço e dou valor de 1 //
  if (slideInicial > slides.length) {
    slideInicial = 1
  }    
  
  // Faço o laço para setar o pointer como ativo no slide que estiver, e deixo o outro como vazio //
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Aqui eu mudo os valores tanto do pointer quanto do slide para ambos //
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
  
  // Aqui que está o pulo do gato para ele mudar sozinho após 8 segundos ou o que vc desejar, lembrando que está em ms //
  setTimeout(showSlides, 8000); //Muda a cada 8 segundos
}
// Aqui onde eu chamo a função para caso eu queira selecionar um slide de acordo com as bolinhas dos pointers //
function slideAtual(n) {
  selecionarSlide(slideInicial = n);
}
// Aqui eu passo o valor atual do slide que estou visualizando//
function selecionarSlide(n) {
  // Crio uma variável qualquer para o laço for //
  var i;
  // Pego os valores das classes slide e pointer e armazeno nas variaveis sliders e dots //
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  if (n > slides.length) {slideInicial = 1}    
  if (n < 1) {slideInicial = slides.length}
  
  // Faço o laço for e verifico se o display: none; está no css do slide //
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  //Faço o laço for e já mudo os resultados para active nos ponteiros para eles ficarem selecionados//
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Aqui reforço e mudo a classe do css para inline-block no slider e active no pointer //
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
}

*/