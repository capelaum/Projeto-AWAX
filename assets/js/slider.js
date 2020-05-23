//* Encapsulate the Selectors comands
const sel = (el) => document.querySelector(el);
const all = (el) => document.querySelectorAll(el);

var slideItem = 0;

window.onload = function () {
    setInterval(passarSlide, 5000);

    var slidewidth = document.getElementById("slideshow1").offsetWidth;
    console.log("window.onload -> slidewidth = ", slidewidth);

    var objs = document.getElementsByClassName("slide");

    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + "px";
    }
}

function passarSlide() {
    var slidewidth = document.getElementById("slideshow1").offsetWidth;

    if (slideItem >= 2) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    //* Mudar Active Pointer
    all('.pointer').forEach( (pointer, pointerIndex) => {
        
        // Ao clicar deve mudar o pointer ativo
        pointer.addEventListener( 'click', () => {
            // console.log("passarSlide -> pointer = ", pointer)
            console.log("pointerIndex = ", pointerIndex)
            

        })
    })

    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

function mudarSlide(pos) {
    slideItem = pos;
    var slidewidth = document.getElementById("slideshow1").offsetWidth;
    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";

}
