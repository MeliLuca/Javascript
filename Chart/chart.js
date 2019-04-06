var interval;
var myChart;
var dataset1=[];
var dataset2=[];
var mainDataset=[];

var N= 16;

class Terremoto {
    constructor(x, y, r, anno) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.anno = anno;
    }
}
function generateNumber(min, max){
    var n= Math.floor(Math.random()*(max-min) +min);
    return n;
}

function createDatasets(){
   
    
}

function addData(){
    var k= 0;
    var anno= 1980;

    for(let i=0; i<N ; i++){
        anno+= generateNumber(0,3);
        mainDataset.push(new Terremoto(generateNumber(-35, 35),generateNumber(-65, 65),generateNumber(4, 20), anno));   
        console.log(mainDataset[i]);
    }
    interval= setInterval(function (){
        let temp= mainDataset[k];
        console.log("valore" + temp.r);
        temp.r > 11 ? dataset1.push(temp) : dataset2.push(temp);
        myChart.update();
        k++;
        if(k> N){
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
                label: 'dataset1',
                data: dataset1,
                backgroundColor: 'rgba(200, 0, 0, 0.4)',
                borderColor: 'red',
            },
            {
                label: 'dataset2',
                data: dataset2,
                backgroundColor: 'rgba(0, 200, 0, 0.4)',
                borderColor: 'green',
            }]
        },
        options: {
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