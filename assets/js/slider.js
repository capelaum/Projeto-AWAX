var slideItem = 0;

window.onload = function () {
    setInterval(passarSlide, 2000);

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    console.log("window.onload -> slidewidth = ", slidewidth);

    var objs = document.getElementsByClassName("slide");

    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + "px";
    }
}

function passarSlide() {
    var slidewidth = document.getElementById("slideshow").offsetWidth;

    if (slideItem >= 2) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    //* Change Active Pointers
    document.querySelectorAll('.sliders-pointers').forEach( (pointer, pointerIndex) => {
        //console.log('here');

        pointer.classList.remove('active');
        //console.log(pointer);


        pointer.addEventListener( 'click', () => {
            console.log("passarSlide -> pointerIndex = ", pointerIndex)
            
            document.querySelector('.pointer.active').classList.remove('active');
            pointer.classList.add('active');

        })
    })

    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

function mudarSlide(pos) {
    slideItem = pos;
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("sliders")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}
