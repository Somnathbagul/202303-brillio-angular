var eat=function(food){
    console.log(`${this.name} eats ${food}`);
}

var sanjay= new Object();
sanjay.name='Sanjay';
sanjay.age=50;
sanjay.eat=eat;

sanjay.eat("Lunch"); //Sanjay eats Lunch

var shivanshi ={
    name:"Shivanshi",
    age:16,
    email:"shivanshi@gmail.com", //trailing comma is allowed JS
    eat:eat
};

shivanshi.eat( "Maggi");

