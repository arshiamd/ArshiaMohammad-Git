var opacity = 0;
var intervalID = 0;

function msg(){
  document.getElementById("op").innerHTML="Welcome From VVIT";
}

function start() {
  window.setTimeout(msg,500);
  intervalID = setInterval(hide,200);
}

function hide() {
  var x = document.getElementById("op")
  opacity =Number( window.getComputedStyle(x).getPropertyValue("opacity"));
  if(opacity>0){
    opacity = opacity-0.1;
    x.style.opacity = opacity;
  }
  else{
    clearInterval(intervalID);
    document.write("<h2>Vasireddy Venkatadri Institute of Technolgy</h2>")
    document.write("<h2>Nambur.</h2>")

  }

}
/*
function start() {
  window.clearTimeout()
}*/
