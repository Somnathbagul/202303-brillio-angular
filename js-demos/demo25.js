
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

async function testPermutation(n,r){
    
    console.log(`please wait for the result of ${n}P${r}...`);

    var p = await permutation(n,r);
    
    console.log(`${n}P${r}=${p}`);
    

}


testPermutation(7,2);

testPermutation(5,3);