var interval;
var myChart;
var dataset1=[];
var dataset2=[];
var mainDataset=[];

var N= 10;

/* class Terremoto {
    constructor(x, y, r, anno) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.anno = anno;
    } 
}*/
function generateNumber(min, max){
    var n= Math.floor(Math.random()*(max-min) +min);
    return n;
}

function addData(){
    var k= 0;
    var anno= 1980;

    for(let i=0; i<N ; i++){
        anno+= generateNumber(0,3);
        mainDataset.push({ x:generateNumber(-35, 35), y: generateNumber(-65, 65), r : generateNumber(4, 20), anno: anno});   
    }
    interval= setInterval(function (){  
        let tmp= mainDataset[k];
        tmp['r'] > 11 ? dataset1.push(tmp) : dataset2.push(tmp);
        myChart.update();
        k++;
        if(k >= N){
            console.log("la funzione dovrebbe finire");
            clearInterval(interval);
        }
    }, 1000);
    
} 

window.onload=function(){
  
    var Chart_ctx = document.getElementById('myChart').getContext('2d');

    myChart = new Chart(Chart_ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'forte',
                data: dataset1,
                backgroundColor: 'rgba(200, 0, 0, 0.4)',
                borderColor: 'red',
            },
            {
                label: 'debole',
                data: dataset2,
                backgroundColor: 'rgba(0, 200, 0, 0.4)',
                borderColor: 'green',
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                   label: function(t, d) {
                      return  d.datasets[t.datasetIndex].label+     
                             ': (Latitudine: ' + t.xLabel + ', Longitudine :' + t.yLabel + ', anno '+ d.datasets[t.datasetIndex].data[t.index]['anno'] +')';
                   }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min:-70,
                        max:70,
                        step:10
                    }
                }],
                xAxes: [{
                    ticks: {
                        min:-40,
                        max:40,
                        step:10
                    }
                }]
            }
        }
    });
    addData();
};