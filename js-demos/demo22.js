
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


function printFactorial(n){

    var p = factorial(n)
                .then( f => console.log(`factorial of ${n} is ${f}`))
                .catch(e => console.log(`error calculating factorial of ${n}: ${e.message}`));

    console.log(`calculating factorial of ${n}`);

}

printFactorial(7);
printFactorial(-2);
printFactorial(5);
printFactorial(9);

