// Scroll to Bottom Presentation
// window.onload = toBottom();

function toBottom(){

  alert("Scrolling to bottom ...");
  // window.scrollTo(0, document.body.scrollHeight);

  var autoScrollDelay = 1
  var autoScrollSpeed = 1
  var autoScrollTimer

  function setAutoScroll(newValue) {

    autoScrollSpeed = newValue ? newValue : autoScrollSpeed

    if (autoScrollTimer) {
      clearInterval(autoScrollTimer)
    }
    if (autoScrollDelay) {
      autoScrollTimer = setInterval(function(){
        window.scrollBy(0, autoScrollSpeed)
      },autoScrollDelay)
    }
  }

  setAutoScroll(30) // higher number =  faster scrolling
}
