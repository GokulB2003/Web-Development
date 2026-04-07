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
// Lexical scope..
/*function outerfunction()
{
    let count=0;
    return function innerfunction(){
        count++;
        console.log(count);
    }
}
let data=outerfunction();
data();
data();
data();
*/
/*function greet(message)
{
    
    return function (val)
    {
        console.log(message+" "+`${val}`);
    }
}
const ans=greet("Gokul");
ans(10);
ans("Morning");
ans(20);
*/

//call-back function
/*function callagain(name,callback)
{
    console.log(name);
    callback();
}
function sayGoodbye()
{
    console.log("bye");
}
callagain("sham",sayGoodbye);
*/

//Examples of Higher order function is
//filter map ForEach
let arr=[1,2,3,4];
/*let even=arr.map(result);
function result(num)
{
    return num*2;
}
console.log(even);
*/

/*arr.forEach(result);
function result(num)
{
   console.log(num);
}
*/
//console.log(ans);
/*let even=arr.filter(function(num)
{
    if(num%2==0)return num;
});
console.log(even);
*/
let a="abc";
let ans=isNaN(a);
console.log(ans);
let b = null; 
console.log(b); 
