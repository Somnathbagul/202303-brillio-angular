var show = object =>{
    for(var property in object){
        console.log(property, object[property]);
    }
    console.log();
}

var p1= new Object();
p1.name='Sanjay';
p1.age=50;

show(p1);

var p2 ={
    name:"Shivanshi",
    age:16,
    email:"shivanshi@gmail.com", //trailing comma is allowed JS
};

show(p2);


show({x:3, y:4});

