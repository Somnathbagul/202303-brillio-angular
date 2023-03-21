function search( match, ...values ){

	var result=[];
	
	for(var value of values){
		if(match(value))
			result.push(value);
	}
	
	return result;

}



var isEven=function(number){return number%2===0;};

var numbers= [2,11,14,12,8,7,24,26];

var evens = search(isEven, ...numbers);

console.log('evens',evens);

var stringLength=function(string){return string.length>=3 && string.length<=5;};


var result= search(stringLength,"India","France","Germany","UK","USA","Norway","Russia");

console.log('result',result);


var odds= search( function(x){return x%2!==0;}, ...numbers);

console.log('odds',odds);


var valuesBetween10_20=  search(n=>n>=10 && n<=20, ...numbers);

console.log('valuesBetween10_20',valuesBetween10_20);
