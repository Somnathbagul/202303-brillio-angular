function plus(x,y){  return x+y;  }

var minus = function substract(x,y){ return x-y;}


var multiply  = function (x, y) {	return x*y;}


var operators = [ plus, minus, multiply, function(x,y){return x/y; }]

var a=20;
var b=15;

for(var i=0;i< operators.length;i++){

    var result = operators[i](a,b);

    console.log(a, operators[i].name, b, result);
}




