function plus(x,y){  return x+y;  }

var minus = function substract(x,y){ return x-y;}

var multiply  = function (x, y) {	return x*y;}


function calculator(value1, operator, value2){
    var result=operator(value1,value2);

    console.log(value1,operator.name,value2,result);
}


calculator(2,plus,3);
calculator(5,minus,1);

calculator(15, function(a,b){return a%b;}, 4); //function will have no name




