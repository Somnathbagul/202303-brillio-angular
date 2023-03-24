
var sum=(...numbers:number[]): number=>{
    let sum=0;

    for(let number of numbers){
        sum+=number;
    }

    return sum;
}


let result = sum(1,2,3,4);

console.log(`sum of 1-4 is ${result}`);