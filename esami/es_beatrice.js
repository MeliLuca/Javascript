/*
Disegnare sullo schermo delle figure geometriche, cerchio, quadrato, che se ci clicco sopra
cambia colore e si rimpicciolisce
*/
window.onload = function(){
  var flagForm = true;
  var grandezza = 20;
  var finestra = document.createElementNS('http://www.w3.org/2000/svg','svg');
  document.body.appendChild(finestra);
  finestra.setAttribute('width', '1000vw');
  finestra.setAttribute('height','1000vh');
  finestra.addEventListener('click', function(event){

    if(event.target.nodeName == 'svg'){
    if(flagForm){
       var form = document.createElementNS('http://www.w3.org/2000/svg','circle');
       form.setAttribute('cx', event.clientX);
       form.setAttribute('cy', event.clientY);
       form.setAttribute('r', grandezza);
       form.setAttribute('class', 'circle');
       form.setAttribute('fill','green');
    }else{
      var form = document.createElementNS('http://www.w3.org/2000/svg','rect');
      form.setAttribute('x', event.clientX);
      form.setAttribute('y', event.clientY);
      form.setAttribute('width', grandezza);
      form.setAttribute('height', grandezza);
      form.setAttribute('class', 'rect');
      form.setAttribute('fill','red');
    }
    finestra.appendChild(form);
    flagForm = flagForm? false: true;
  }else{
    if(event.target.getAttribute('class') == 'circle'){
      let radius = event.target.getAttribute("r");
      let newR = radius > 20 ? 20: 40;
      event.target.setAttribute('r', newR);
    }else{
      if(event.target.nodeName == 'rect'){
          var form = document.createElementNS('http://www.w3.org/2000/svg','circle');
          form.setAttribute('cx', event.target.getAttribute("x"));
          form.setAttribute('cy', event.target.getAttribute("y"));
          form.setAttribute('r', grandezza);
          form.setAttribute('class', 'rect');
          form.setAttribute('fill','yellow');
      }else{
        var form = document.createElementNS('http://www.w3.org/2000/svg','rect');
        form.setAttribute('x', event.target.getAttribute("cx"));
        form.setAttribute('y', event.target.getAttribute("cy"));
        form.setAttribute('width', grandezza);
        form.setAttribute('height', grandezza);
        form.setAttribute('class', 'rect');
        form.setAttribute('fill','red');
      }
      event.target.parentNode.replaceChild(form, event.target);
    }
  }
  });
  setInterval(()=>{
    finestra.removeChild(finestra.firstChild);
  },2000);
}
