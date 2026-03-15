const s1=new Promise((resolve,reject)=>{
    // resolve("hello");
     reject("Error");

}).then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})