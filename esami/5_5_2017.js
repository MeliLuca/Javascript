window.onload=function(){
     var headerList=[]
    for(let i=1; i<7; i++){  
        headerList[i]=document.getElementsByTagName('h'+ i.toString());
    }
    for(let i=1; i<7; i++){
        var currHead= headerList[i];
        for(let j=0; j< currHead.length; j++){
            currHead[j].textContent=currHead[j].textContent.toUpperCase();
            if(i<6){
                var level = i+1;
                var nuovo = document.createElement('h' + level.toString());
                console.log(nuovo)
                nuovo.innerHTML= currHead[j].innerHTML;
                currHead[j].parentNode.insertBefore(nuovo, currHead[j]);
                currHead[j].parentNode.removeChild(currHead[j]);
            }
        }
    }  
}