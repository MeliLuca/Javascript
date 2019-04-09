// Implementare il gioco ”caccia alle talpe”. Il gioco prevede una griglia di lato N dove si alternano casualmente erba, la
// testa di una talpa, il fondoschiena di una talpa. Se il giocatore clicca l’erba non succede nulla, se clicca la testa di una
// talpa ottiene 100 punti, se clicca il fondoschiena ne perde 200. Il gioco termina se il punteggio scende sotto 0 punti,
// segnalando al giocatore che ha perso, o se sale oltre i 1000 punti, segnalando al giocatore che ha vinto. Il punteggio
// deve essere sempre visibile. Si assuma di avere a disposizione le immagini grass.png, head.png, rear.png.

var symbols={"./Texture/faccia.jpg": 50, "./Texture/culo.jpeg": -200, "./Texture/erba.jpeg": 0};
var N = 10;
var score= 0;

function creaTalpa(){
  var talpa = document.createElement("img");
  talpa.setAttribute("height", "40");
  talpa.setAttribute("width", "40");
  talpa.setAttribute("src", Object.keys(symbols)[Math.floor(Math.random()*3)]);
  document.body.appendChild(talpa);
}

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    creaTalpa();
  }
  document.body.appendChild(document.createElement("br"));
}
