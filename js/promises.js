console.log("Hello world");
let p1=fetch("https://jsonplaceholder.typicode.com/users");
console.log(p1);p1.then((response)=>{
    return response.json();
}).then((response)=>{
    if(!response.ok)
    {
        throw new error("data is not present in the server");
    }
    console.log(response);
})
.catch((error)=>{
    console.log(error.message);
})
console.log("The end");


//convert javascript code to the json formet and jason formst to the javascript code..
//javascript object:
//json format it is a universal format like any language can unserdtand its...

const obj={
    "name":"Gokul",
    "Roll-no":3,
    "address":"pune maharashtra",

}

//create new promise
const s1=new Promise((resolve,reject)=>{
    // resolve("hello");
     reject("Error");

}).then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})



