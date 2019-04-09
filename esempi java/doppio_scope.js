var a = 8;
var b = { test:a, c:1 };

function createCounterCollection(size){

    var total = 0;    

    function createCounter(){
        var base = 0;
        return function(){            
            total++;
            base++;
            return base;
        }
    }

    var collection = { getTotal: function(){ return total; } };

    while(size-->0)
       collection["count_"+size] = createCounter();

    return collection;
}

var c1 = createCounterCollection(3);
var c2 = createCounterCollection(10);




