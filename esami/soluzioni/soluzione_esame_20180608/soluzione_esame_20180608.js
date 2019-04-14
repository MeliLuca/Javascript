var N = 10;
var K = 5;
var tiles = [];

for(var i=0; i<N; i++, document.body.appendChild(document.createElement("br")))
   for(var j=0; j<N; j++){
	  var tile = document.body.appendChild(document.createElement("img"));
	  tile.setAttribute("src","piastrella.gif");
	  tile.mina = (i*N+j)<K;
	  tile.vicini = [];
	  for(var y=Math.max(0,i-1); y<=Math.min(N-1,i+1); y++)
  	     for(var x=Math.max(0,j-1); x<=Math.min(N-1,j+1); x++)
			 tile.vicini.push(y*N+x);
	  tile.addEventListener("click",function(e){click(e.target);});
	  tiles.push(tile);
   }

for(var i = tiles.length-1; i>=0; i--){
	var j = Math.floor(Math.random()*(i+1));
	[tiles[i].mina, tiles[j].mina] = [tiles[j].mina, tiles[i].mina];
}

function click(t){
	if(t.getAttribute("src")=="piastrella.gif")
	   if(t.mina){
          for(var i in tiles)
	         if(tiles[i].mina)
		        tiles[i].setAttribute("src","mina.gif");
		  document.body.appendChild(document.createTextNode("Hai perso ! "));
	   }else{
		  var mine = 0;
		  for(var i in t.vicini)
			 mine += tiles[t.vicini[i]].mina;
		  t.setAttribute("src","sq"+mine+".gif");
	      for(var i in t.vicini)
	       if(mine==0)
		      click(tiles[t.vicini[i]]);
		  if((++K)==N*N)
   		     document.body.appendChild(document.createTextNode("Hai vinto ! "));
	  }
}