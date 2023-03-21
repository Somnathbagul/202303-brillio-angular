

var plus = function(x,y){return x+y;};

var minus = (x,y) => x-y; 

function selectOperator(symbol){
    if(symbol==='+')
        return plus;
    else if(symbol==='-')
        return minus;
    //else
    //   return undefined;
}

var x = selectOperator("+"); //what is x? --->plus

console.log('x(10,12)',x(10,12));

var y = selectOperator("+")(5,3); 

console.log('selectOperator("+")(5,3)',selectOperator("+")(5,3));



