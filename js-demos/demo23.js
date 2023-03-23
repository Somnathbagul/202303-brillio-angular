
function factorial(n){

    return new Promise(function(resolve,reject){

        var fn=1;
        var iid=setInterval(()=>{
            if(n<0){
                reject(new Error(`Negative Numbers Not allwed: ${n}`));
                return clearInterval(iid);
            }
            else if(n>0){

                fn*=n;
                n--;
            }
            else {
                resolve(fn);
                return clearInterval(iid); //task is over
            }


        },1000);

    });
}


var printFactorial=async(n)=>{
    try{

        console.log(`calculating factorial of ${n}`);
        var fn = await factorial(n)
        console.log(`factorial of ${n} is ${fn}`);    
    }catch(error){
        console.log(`error: ${error.message}`);
    }
}

printFactorial(7);
printFactorial(-2);
printFactorial(5);
printFactorial(9);

