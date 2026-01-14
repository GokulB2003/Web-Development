
// const a=3.14;
// console.log(a);
//by using function we can store the value in some another variable.
let ans= function addition(e,f)
{
    return e+f;
}

console.log(ans(14,56));

//using Arrow Function
let add=(a,b)=>
{
    return a+b;
}
console.log(add(12,10));

//stored an already declare function in variable
let an=function mul(a,b)
{
    return a*b;
}
let abb=an(10,20);
console.log(abb);

//IIFE Result Stored in Variable (Function Runs Immediately)
let abbb=(function(a,b)
{
    return a+b;
})(10,20);
console.log(abbb);

//object 
/*An object is a collection of key–value pairs.
It is used to store multiple related values in one variable.it provide the meaning easily instaed of using Array:  non-primitive data type we can make the changes it is mutable but in pritive data type is immutable*/
let student={
    "name":"raju",
    "village":"Ahilyanagar",
    "pin-code":414005,
    "mob":9284771165
}
// Adding new property
student.city = "Pune";
console.log(student["pin-code"]);
console.log(student.village);
//for udate the value in object
student.village="Akolner";
console.log("After"+" "+student.village);
//delete the value
delete student.mob;
console.log(student.mob);
/*new Object() is a built-in constructor used to create an empty object. */

//Check Property Exists
console.log(student.hasOwnProperty("village"));

console.log("checking the ");
let a=10;
let b=20;
a=b;

b++;

console.log(a);
console.log(b);
//pass by reference:if we think about array which contains the large data so its not possible to copy that data from the one place to another so but by using this concept we can use its.
let obj1={
    "name":"ram",
    "village":"nagar"
}
let obj2={
    "name":"sham",
    "village":"JWadi"
}
obj1=obj2;
//both pointing to the same location
console.log(obj1);
//if i make changes in the obj1 it will be reflected to another also
obj1.village="Rahuri";
console.log(obj2.village);//this will be generate the same result
obj2.village="supa";//this will also meke changes in the other object also.
console.log(obj1.village);

//Node-js node is a C++ program which execute a our v8 Engine so Node js is a runtime Environment.
/*Node.js is a runtime environment that allows us to run JavaScript outside the browser.
It is built using C++ and works by embedding Google’s V8 JavaScript Engine, which is also written in C++.

The V8 engine compiles JavaScript into machine code, and Node.js provides additional features like file system access, networking, APIs, and an event-driven architecture.

That’s why Node.js is not a programming language — it is a runtime environment.*/

//static data stores in stack but dynamic data stores in heap so dynamic data can be changes like String ,array-->can grow and shrink.

/*operators
1.Arithmetic
//console.log(6**2);//36
2.assignment
3.comparision return true or false value
><>=

4.

*/
/*convert String to number
let  z="127";
let m=Number(z);
console.log(m);
console.log(typeof(m));//check
*/
/*
let a=20;
let b="20";
console.log(a==b);//javascript convert this b into a number and then check so result be a true;

==============>strick checking
let s=10;
let b=10;
console.log(s===b);
//In this case first check data type both data //type should be equal then done the comparision.
*/
console.log(0/0);
//output:NAN ===not a number
//convert In num
console.log(Number(null));//0
console.log(Number(undefined));//NAN

//ECMAScript defines the rules → JavaScript follows those rules.so it should be same behave like in other browser.
console.log(Boolean(0));//To conbert in Boolean
console.log(Boolean(-2));

console.log(Boolean("Jfndmfdn"));

let aa=0.3;
let bb=0.3;
let cc=aa+bb;
console.log(cc==0.6);//false
console.log(cc);


/*when we do ><>=<=(null--------->number)*/
console.log(null>=0);//true;
console.log(null==0);//false
console.log(10>true);//Ek koi bhi type hai uske agar muze another me compare karnaa hai to number me convert karnaa padegaa.

console.log(NaN==NaN);//false
//for Loop
for(let i=0; i<3; i++)
{
    console.log(i);
}
//while loop
let i=0;
while(i<2)
{
    console.log(i);
    i++;
}

//do while
do{
    console.log(i);
    i++;
}while(i<2);

//If-else condition-->multiple condition..

let j=68;
if(j<18)
{
    console.log("Not Eligible");

}
else if(j>18 && j<20)
{
    console.log("Eligible they can be do a vote:");
}
else
{
    console.log("please Vote");
}

//&& || 
console.log(10>-2 && 15<30);

let str="rohit";
let bbb="Mohit";
let anss=str+bbb;
console.log(anss);


////////////////////////////////////
/*What is toFixed()?

The toFixed() method in JavaScript is used to format a number to a specified number of decimal places. It rounds the number to the nearest value based on the specified precision and returns it as a string.

Syntax:
num.toFixed(digits)

digits: This parameter is optional. It defines how many decimal places the number should be rounded to. It is a number between 0 and 20 (inclusive). If omitted, it defaults to 0.
//Decimal chya nantr che avlue round off (Digits)
*/
//example:
let aaaa=10.23333;
console.log(aaaa.toFixed(2));//It returns a string, even if the result is an integer. //10.23
console.log(aaaa.toFixed(4));//10.2333
console.log(aaaa.toPrecision(4));//10.23
console.log(aaaa.toPrecision(3));//10.3
console.log(aaaa.toString());
//in primitive data type we copy the data but in referncial data type we copy the referce.
//we can also create the number by using the like object
let ab=new Number(3);
let c=new Number(3);
if(a==b)//false because object
{
    console.log("both objects are equal:");
}
else
    console.log("Both r different:");

/*Math.abs() in JavaScript

The Math.abs() method returns the absolute value of a number.
The absolute value is the number without its sign (always positive or zero). 
Math.abs(number)
number: The value whose absolute value you want.
console.log(Math.abs(10));    // 10
console.log(Math.abs(-10));   // 10
console.log(Math.abs(0));     // 0
console.log(Math.abs(-5.75)); //5.75
console.log(Math.abs("-20"));  // 20
console.log(Math.abs("5"));    // 5
If it cannot be converted:

javascript
Copy code
console.log(Math.abs("abc"));  // NaN
✔ Removes the minus sign if the number is negative.

Returns a number.

*/
console.log(Math.PI);//3.14
console.log(Math.ceil(3.2));//4 upper
console.log(Math.floor(3.2));//3 Lower
console.log(Math.SQRT1_2(9));
//Math.Random...............
console.log(Math.random());
/*ex-like when in lucky draw it generate the value from 0 to 1 where 0 is included but 1 is excluded like upto 0.999999*/

// suppose if we multiply it by ten then it generate the value in between like 0.1*10=1 ,0.2*10=2,0.3*10=3;

//use to like generate the OTP
//To generate in between the 1 to 9
console.log(Math.random()*10);
//to get a Fixed exact value between the 0-9 then do floor

console.log(Math.floor(Math.random()*10));//generate random value in between the 0-9
//To generate randome number between the 1-10
console.log(Math.floor((Math.random()*10)+1));

//1---->6
////0-->0.99999*6+1--------->upto 1to 5;
console.log(Math.floor(Math.random()*6)+1);

/**  Formula* */
// Math.floor((Math.random()*(max-min+1)+min)) 

//15----25
console.log(Math.floor(Math.random()*(11))+15);

//30-----40
console.log(Math.floor(Math.random()*10+1)+30);

//50-----65//where 65 is also included
console.log(Math.floor(Math.random()*15+1)+50);
//generate OTP
//but we do not prefer to use it because its not secure Way.
//use crypto Library


//String:
/*const str1="String create 
keli";*/

const str2="Dusryaa line laa lihili tr error show karte like str1";
const str3=`hyaa String laa error yennar nahi`;
console.log("Best way to create a String:"+str3);

const day=18;
console.log(`Strike is coming on:${day}`);//day chyaa aatli value
const str4='Hello Gokul';
//console.log(str4.length);
//console.log(str4[0]);
//console.log(str4.toUpperCase());
//console.log(str4.toLocaleLowerCase());

//to find the Substring()

//console.log(str4.indexOf('okul'));
//console.log(str4.lastIndexOf('okul'));

//Extracting String
//console.log(str4.slice(0,7));//7-index not include.
console.log(str4.slice(3));
console.log(str4.slice(-4,-1));//oku

const str5='Gokul';
const str6='Bhor';

const newStr=str5+str6;//concatanation
console.log(newStr);
console.log(newStr.substring(3,6));

console.log(24+30+'Rohit');

console.log(str6.replace('r','T'));
console.log(str6.replaceAll('r','T'));
//Trim-->remove space from beginning and end
//when we Iterate its on it like in form when we take data must apply trim.
//trimStart() && trimEnd(); method

const name="name,Rohit,Monu,Pinku,Anjali";
console.log(name.split(","));


/***************Date */
//It takes time from our device..
const now=new Date();//UTC Date which is Just behind the 5:30 hrs fromm
console.log(now);

//convert into indias time
console.log(now.toString());
console.log(now.toLocaleDateString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());//Month start from Zero
console.log(now.getHours());//like multiple methods.
//days start from 1
//we can also create our own 
const newDate=new Date(2025,8,20,8,25,16,125);
console.log(newDate.toString());

