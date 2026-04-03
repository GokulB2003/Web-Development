/*let person=[    
    {
        name:"gokul",
        city:"pune",
        pincode:414005
    },
    {
        name:"reamesh",
        city:"pune",
        pincode:"not available",
    }
    ,
    {
        name:"suresh",
        city:"jalgaon",
        pincode:626262
    }
];
console.log(person.length);
for(let i of person){
    console.log(i.name+" "+i.city+" "+i.pincode);
}

let str=`{
    "name":"gokul",
    "city":"pune",
    "pincode":"414005"
}`
//convert into a object
let obj=JSON.parse(str);

console.log(obj);


//call back function
function display(val,callback)
{
    console.log(val);
    callback();
}
function show()
{
    console.log("call function to show data:");
}
display("hello good morning",show);
*/

