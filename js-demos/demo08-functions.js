function plus(...numbers){
    
    var result=0;
    for(var number of numbers){
        result+=number;


    }

    return result;
    
}

function average(...numbers){

    return plus(...numbers)/numbers.length;

}


console.log('average(1,2,3,4)',average(1,2,3,4));




console.log('plus(2,3,4)',plus(2,3,4));
console.log('plus(1,2,3,4,5)',plus(1,2,3,4,5));
console.log('plus(1)',plus(1));
console.log('plus()',plus());
