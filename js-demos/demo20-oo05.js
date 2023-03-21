function createPerson( name, age){

	var p = new Object();
	
	p.name=name;
	p.age=age;
	p.eat = function(food){
		console.log(`${this.name} eats ${food}`);
	}
	p.toString=function(){
		return `Person [ name = ${this.name}, age= ${this.age}]`;
	}
	
	return p;

}

var sanjay=createPerson("Sanjay", 50);
var shivanshi=createPerson("Shivanshi", 15);

console.log("p1 "+ sanjay);
console.log("p2 "+ shivanshi);

sanjay.eat("Lunch");
shivanshi.eat("Dinner");
