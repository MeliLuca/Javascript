/* Implementare il gioco ”campo minato”. Il gioco prevede una griglia di lato N di piastrelle. Sotto le piastrelle sono
nascoste K mine in posizioni casuali. Quando si clicca su una piastrella, se sotto di questa c’`e una mina il giocatore
perde e vengono mostrate tutte le mine. Se invece non c’`e una mina nella casella si mostra un numero pari alle
mine nelle caselle adiacenti (quindi da 0 a 8). Se ci sono 0 mine nelle caselle adiacenti l’area sminata si espande
automaticamente fino a scoprire il confine di caselle che hanno almeno una mina adiacente. Se il giocatore preme tutte
le caselle senza mine vince. Si assuma di avere a disposizione le immagini piastrella.png, mina.png e immagini con
i numeri che vanno da 0.png a 9.png.
 */

var N= 10;
var K= 5;
var matrice=[];
//var symbols={'./Texture/piastrella.gif': 0, './Texture/mina.gif'}

function Cella(){
    this.valore= 0;
    this.type= './Texture/piastrella.gif';
}

function scopriCelle(r, c){
    if(r >= 0 && r < N && c >= 0 && c < N  && matrice[r][c].valore >= 0){
        matrice[r][c].type= './Texture/seq'+ matrice[r][c].valore +'.gif';
        scopriCelle(r+1,c);
        scopriCelle(r,c+1);
        scopriCelle(r+1,c+1);
        scopriCelle(r-1,c);
        scopriCelle(r,c-1);
        scopriCelle(r-1,c-1);
        scopriCelle(r-1,c+1);
        scopriCelle(r+1,c-1);
    }
}

function scoperchiaCella(r, c){
    if(matrice[r][c].valore < 0){

        for(let i=0; i<N; i++){
            console.log('faccio il FOR')
            for(let j=0; j<N; j++){
                if(matrice[i][j].valore < 0){
                    matrice.type='./Texture/mina.gif';
                }
            }
        }
        var div= document.createElement('div');
        div.innerHTML= 'HAI PERSO';
        document.body.appendChild(div);

    }else{
        scopriCelle(r, c);
    }
}

function incrementaPos(r, c){
    if(r >= 0 && r < N && c >= 0 && c < N ){
        if(matrice[r][c].valore >= 0)
            matrice[r][c].valore ++;    
    }
}

function creaCella(r, c){
    matrice[r][c]= new Cella();
    var cell = document.createElement('img'); 
    cell.setAttribute('src', matrice[r][c].type); 
    cell.addEventListener("click", ()=> {scoperchiaCella(r,c)}); 
    document.body.appendChild(cell);
}

function creaCampo(){

    for(let i=0; i<N; i++){
        matrice[i] = [];
        for(let j=0; j<N; j++){
           creaCella(i,j);           
        }
        document.body.appendChild(document.createElement('br'));
    }

    while(K){
        var r= Math.floor(Math.random()* N);    
        var c= Math.floor(Math.random()* N);
        if(matrice[r][c].valore >= 0){
            matrice[r][c].valore= -1;
            console.log(r);
            console.log(c);
            incrementaPos(r+1,c);
            incrementaPos(r,c+1);
            incrementaPos(r+1,c+1);
            incrementaPos(r-1,c);
            incrementaPos(r,c-1);
            incrementaPos(r-1,c-1);
            incrementaPos(r-1,c+1);
            incrementaPos(r+1,c-1);

            K--;
        }
    }
}
window.onload = function(){
    creaCampo();
}
