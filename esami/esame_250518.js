
var N= 10;
var matrice=[];

function crea_campo(){
    var campo = document.createElement("TABLE");
    campo.style.border = "solid";
    
    for(var i=0; i<N; i++){
        var riga = document.createElement("TR");
        riga.style.border = "solid";
        riga.style.minHeight= "20px";
        riga.style.minWidth= "20px";
        campo.appendChild(riga);

        for(var j=0; j<N; j++){
            var colonna = document.createElement("TD");
            colonna.style.border = "solid";
            colonna.style.minHeight= "20px";
            colonna.style.minWidth= "20px";
            riga.appendChild(colonna);
            
        }
    }
    document.body.appendChild(campo);
}

function crea_talpa(){
    
}

window.onload = function(){
    crea_campo();
}