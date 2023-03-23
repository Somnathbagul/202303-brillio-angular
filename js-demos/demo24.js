
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


var permutation= async(n,r)=>{

    var fn = await factorial(n);
    var fn_r=await factorial(n-r);

    return fn/fn_r;
}

var p = permutation(5,3);

p.then(console.log);

console.log('please wait for the result...');