function plus(){
    
    var result=0;
    for(var i=0;i<arguments.length;i++){
        result+=arguments[i];


    }

    return result;
    
}

console.log('plus(2,3,4)',plus(2,3,4));
console.log('plus(1,2,3,4,5)',plus(1,2,3,4,5));
console.log('plus(1)',plus(1));
console.log('plus()',plus());



