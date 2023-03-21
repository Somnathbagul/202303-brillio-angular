


function selectOperator(symbol){
    
    var plus = function(x,y){return x+y;};
    
    var minus = (x,y) => x-y; 
    
    if(symbol==='+')
        return plus;
    else if(symbol==='-')
        return minus;

}

var o1 = selectOperator("+");

var o2= selectOperator("-");

var o3= selectOperator("+");


console.log('o1===o2',o1===o2); //false
console.log('o1===o3',o1===o3); //false







