

interface Social{
    name:string,
    url:string
}

interface Name{
	firstName:string,
	middleName?:string,
	lastName:string;
    penName?:string;
}


interface Author{
    name: Name| string,
    email?: string, //optional
    photoUrl:string,
    social?:Social[], //optional
};

interface Book{
    title:string,
    author:Author,
    price:number,
    rating:number
};


var a1: Author={
    name: "Vivek Dutta Mishra",
    email: "",
    photoUrl: "http://photo.com/vivek",
    social: [
        {name:"instagram",url:"https://instagram.com/vivekduttamishra"},
    ]
};

var a2: Author={
    name: { firstName:'Ramdhari', lastName:"Singh", penName:'Dinkar'},
    photoUrl: "https://photo.com/dinkar",
    
}



var b1: Book ={
    title: "The Accursed God",
    author: a1,
    price: 0,
    rating: 0
};
