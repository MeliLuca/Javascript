function createRow(nome, ingrediente, prezzo, total){
        var row = document.createElement('tr');
        table.appendChild(row);  
        var cell = document.createElement('td');
        cell.innerHTML= nome;
        cell.addEventListener('mouseover', ()=>{cell.innerHTML= ingrediente;});
        cell.addEventListener('mouseout', ()=>{cell.innerHTML= nome;}); 
        row.appendChild(cell);

        var price = document.createElement('td');
        price.innerHTML= prezzo;
       
        price.addEventListener('click', ()=>{total.innerHTML = parseFloat(total.innerHTML) + parseFloat(prezzo)});
        row.appendChild(price);
}


var menuList = document.getElementsByClassName("menu");

while(menuList.length){
    var table = document.createElement('TABLE');
    document.body.appendChild(table);

    // Ogni tabella deve avere il suo totale. Quindi occorre creare un div per ogni tabella e modificarlo direttamente, senza usare
    // altre variabili.
    var total= document.createElement('div');
    document.body.appendChild(total);   
    total.innerHTML = '0';

    var menu= menuList[0].getElementsByTagName("div");
    while(menu.length){
        var obj = menu[0].textContent.split(';');
        createRow(obj[0], obj[1], obj[2], total);
        menuList[0].removeChild(menu[0]);
    }
    document.body.removeChild(menuList[0]);
}   


