// Scrivere uno script che posizioni un nuovo cerchio verde per ogni posizione cliccata dall’utente. Tutti i cerchi presenti
// devono pulsare in sincrono
var flag= true;
var px=40;
var finestra = document.createElementNS("http://www.w3.org/2000/svg","svg");
finestra.setAttribute("width", "100vw");
finestra.setAttribute("height", "100vh");
document.body.appendChild(finestra);

finestra.addEventListener("click", function(){
  console.log(event.clientX);
  var circle= document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", event.clientX);
  circle.setAttribute("cy", event.clientY);
  circle.setAttribute("fill", "green");
  circle.setAttribute("r", px+"px");
  finestra.appendChild(circle);
});
var myTimer= setInterval(function(){
  px = flag ? 20 : 40;
  let circle_list= finestra.getElementsByTagName("circle");
  for(let i=0; i<circle_list.length; i++){
    circle_list[i].setAttribute("r", px+"px");
  }
  flag= !flag;
}, 1000);
