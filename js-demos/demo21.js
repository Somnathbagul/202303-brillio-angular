

var iid= setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000);


setTimeout(()=>{
    clearInterval(iid);
},10000); //after 10 seconds