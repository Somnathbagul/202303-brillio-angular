var x=20;   //same as window.x=20 in browser app

function plus(x, y){    //plus is same as window.plus

	var z = x+y;  //not attached to window/global context
	
	return z;
}


console.log('plus(2,x)',plus(2,x));
