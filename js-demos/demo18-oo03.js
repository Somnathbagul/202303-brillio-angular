var eat=function(person,food){
    console.log(`${person.name} eats ${food}`);
}

var sanjay= new Object();
sanjay.name='Sanjay';
sanjay.age=50;
sanjay.eat=eat;

sanjay.eat(sanjay,"Lunch"); //Sanjay eats Lunch

var shivanshi ={
    name:"Shivanshi",
    age:16,
    email:"shivanshi@gmail.com", //trailing comma is allowed JS
    eat:eat
};

shivanshi.eat( sanjay, "Lunch");

