window.onload=function(){
    for(let i=6; i>0; i--){
        var currHead= document.getElementsByTagName('h'+ i.toString());
        for(let j=0; j< currHead.length; j++){
            currHead[j].innerHTML=currHead[j].innerHTML.toUpperCase();
            if(i<6){
                var level = i+1;
                var nuovo = document.createElement('h' + level);
                nuovo.innerHTML= currHead[j].innerHTML;
                currHead[j].parentNode.replaceChild(nuovo, currHead[j]);
            }
        }
    }
    var stringa= 'ciao';
    var array= stringa[0];
    console.log(array)
}
