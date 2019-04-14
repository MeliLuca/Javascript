window.onload=function(){
    var headerList=[]
    for(let i=1; i<7; i++){  
        headerList[i]=[];
        headerList[i].push(document.getElementsByTagName('h'+ i.toString()));
    }
    for(let i=1; i<7; i++){
        var currHead= headerList[i];
        var list= currHead[0]
        console.log(currHead);
        while(list.length > 0){
            var childs = list.childsNode;

            console.log(childs)
            for(let j=0; j< childs.length; j++){
                childs[0].innerHTML.toUpperCase();
            }
            var level = i<6 ? i+1 : i;
            var nuovo = document.createElement('h'+level);
            nuovo.innerHTML= currHead[0].innerHTML.toUpperCase();
            currHead[0].parentNode.insertBefore(nuovo, currHead[0]);
            currHead[0].parentNode.removeChild(currHead[0]);
        }
    }
}