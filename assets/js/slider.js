const pointers = document.querySelectorAll(".pointer");
var pos = 0;

window.onload = () => {
  var slidewidth = document.querySelector(".sliders-pointers").offsetWidth;
  var objs = document.getElementsByClassName("slide");

  console.log("window.onload -> slidewidth = ", slidewidth);

  for (var i = 0; i < objs.length; i++) {
    objs[i].style.width = slidewidth + "px";
  }
  
  // passa automaticamente a cada periodo
  setInterval(passarSlide, 5000);

};

function passarSlide() {

  var slidewidth = document.querySelector(".sliders-pointers").offsetWidth;

  if (pos >= 2) pos = 0;
  else pos++;
  
  document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + slidewidth * pos + "px";

  removeActive(pointers)

  pointers[pos].classList.add("active");

}

function mudarSlide(pos) {

  pos = pos;

  var slidewidth = document.querySelector(".sliders-pointers").offsetWidth;

  document.getElementsByClassName("sliders")[0].style.marginLeft =
    "-" + slidewidth * pos + "px";

  removeActive(pointers)

  pointers[pos].classList.add("active");
}

function addActive(pointers) {

  //* Mudar Active Pointer
  pointers.forEach((pointer, pointerIndex) => {

    // Ao clicar deve mudar o pointer ativo
    pointer.addEventListener("click", () => {

      removeActive(pointers);

      console.log("pointer = ", pointer);
      console.log("pointerIndex = ", pointerIndex);

      pointer.classList.add("active");
    });

  });
}

function removeActive(pointers) {
  pointers.forEach((pointer, pointerIndex) => {
    if (pointer.classList.contains("active"))
      pointer.classList.remove("active");
  });
}
