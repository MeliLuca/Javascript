window.onload = function(){
  
  //var finestra= document.getElementsByTagName("svg")[0];
  var finestra= document.createElementNS("http://www.w3.org/2000/svg", "svg");
  finestra.setAttribute("height", "100vh");
  finestra.setAttribute("width", "100vw");
  document.body.appendChild(finestra);
  finestra.addEventListener("click", function(event){
    var cerchio = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pos_x= event.clientX;
    pos_y= event.clientY;
    cerchio.setAttribute("cx", pos_x);
    cerchio.setAttribute("cy",pos_y);
    cerchio.setAttribute("r", "40px");
    cerchio.setAttribute("fill", "green");
    finestra.appendChild(cerchio);
  });
  
};
