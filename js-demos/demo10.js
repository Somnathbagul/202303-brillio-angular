function plus(x,y){
    return x+y;
}

console.log('typeof plus',typeof plus);

var add= plus;

console.log('typeof add',typeof add);

console.log('add(20,30)',add(20,30));

console.log('plus.name',plus.name);

console.log('add.name',add.name);

var minus = function substract(x,y){
	return x-y;
}

console.log('minus(2,3)',minus(2,3)); //-1
console.log('typeof minus',typeof minus); //function
console.log('minus.name',minus.name); //substract

//console.log('substract.name',substract.name); //undefined


var multiply  = function (x, y) {
	return x*y;
}

console.log('typeof multiply',typeof multiply); //function
console.log('multiply.name',multiply.name); //multiply. the first reference it is assigned to








