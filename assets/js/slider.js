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
    document.querySelectorAll('.sliders-pointers').forEach( (pointer, pointerIndex) => {
        
        pointer.classList.remove('active');
        
        // Ao clicar deve mudar o pointer ativo
        pointer.addEventListener( 'click', () => {
            console.log("passarSlide -> pointer = ", pointer)
            console.log("passarSlide -> pointerIndex = ", pointerIndex)
            
            document.querySelector('.pointer .active')[pointerIndex].classList.remove('active');
            pointer.classList.add('active');

        })
    })

    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

function mudarSlide(pos) {
    slideItem = pos;
    var slidewidth = document.getElementById("slideshow1").offsetWidth;
    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";

}
