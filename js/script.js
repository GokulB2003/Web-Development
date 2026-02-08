
//Defination of Array in javascript is different because in javascript array is dynamic.
// const a=3.14;
// console.log(a);

const { useCallback } = require("react");

//by using function we can store the value in some another variable.
let ans = function addition(e, f) {
    return e + f;
}

console.log(ans(14, 56));



//using Arrow Function
let add = (a, b) => {
    return a + b;
}
console.log(add(12, 10));



//stored an already declare function in variable
let an = function mul(a, b) {
    return a * b;
}
let abb = an(10, 20);
console.log(abb);



//IIFE Result Stored in Variable (Function Runs Immediately)
let abbb = (function (a, b) {
    return a + b;
})(10, 20);
console.log(abbb);



//object 
/*An object is a collection of key–value pairs.
It is used to store multiple related values in one variable.it provide the meaning easily instaed of using Array:  non-primitive data type we can make the changes it is mutable but in pritive data type is immutable*/
let student = {
    "name": "raju",
    "village": "Ahilyanagar",
    "pin-code": 414005,
    "mob": 9284771165
}
// Adding new property
student.city = "Pune";
console.log(student["pin-code"]);
console.log(student.village);
//for udate the value in object
student.village = "Akolner";
console.log("After" + " " + student.village);
//delete the value
delete student.mob;
console.log(student.mob);
/*new Object() is a built-in constructor used to create an empty object. */

//Check Property Exists
console.log(student.hasOwnProperty("village"));
console.log(student.hasOwnProperty("mob"));

console.log("checking the ");
let a = 10;
let b = 20;
a = b;

b++;

console.log(a);
console.log(b);
//pass by reference:if we think about array which contains the large data so its not possible to copy that data from the one place to another so but by using this concept we can use its.
let obj1 = {
    "name": "ram",
    "village": "nagar"
}
let obj2 = {
    "name": "sham",
    "village": "JWadi"
}
obj1 = obj2;
//both pointing to the same location
console.log(obj1);
//if i make changes in the obj1 it will be reflected to another also
obj1.village = "Rahuri";
console.log(obj2.village);//this will be generate the same result
obj2.village = "supa";//this will also meke changes in the other object also.
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
console.log(0 / 0);
//output:NAN ===not a number
//convert In num
console.log(Number(null));//0
console.log(Number(undefined));//NAN

//ECMAScript defines the rules → JavaScript follows those rules.so it should be same behave like in other browser.
console.log(Boolean(0));//To conbert in Boolean
console.log(Boolean(-2));

console.log(Boolean("Jfndmfdn"));

let aa = 0.3;
let bb = 0.3;
let cc = aa + bb;
console.log(cc == 0.6);//false
console.log(cc);


/*when we do ><>=<=(null--------->number)*/
console.log(null >= 0);//true;
console.log(null == 0);//false
console.log(10 > true);//Ek koi bhi type hai uske agar muze another me compare karnaa hai to number me convert karnaa padegaa.

console.log(NaN == NaN);//false
//for Loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//while loop
let i = 0;
while (i < 2) {
    console.log(i);
    i++;
}

//do while
do {
    console.log(i);
    i++;
} while (i < 2);

//If-else condition-->multiple condition..

let j = 68;
if (j < 18) {
    console.log("Not Eligible");

}
else if (j > 18 && j < 20) {
    console.log("Eligible they can be do a vote:");
}
else {
    console.log("please Vote");
}

//&& || 
console.log(10 > -2 && 15 < 30);

let str = "rohit";
let bbb = "Mohit";
let anss = str + bbb;
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
let aaaa = 10.23333;
console.log(aaaa.toFixed(2));//It returns a string, even if the result is an integer. //10.23
//console.log(aaaa.toFixed(4));//10.2333
console.log(aaaa.toPrecision(4));//10.23
console.log(aaaa.toPrecision(3));//10.2
console.log(aaaa.toString());
//in primitive data type we copy the data but in referncial data type we copy the referce.
//we can also create the number by using the like object
let ab = new Number(3);
let c = new Number(3);
if (a == b)//false because object
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

console.log(Math.abs(-10));

console.log(Math.abs("abc"));  // NaN
✔ Removes the minus sign if the number is negative.

Returns a number.

*/
console.log(Math.PI);//3.14
console.log(Math.ceil(3.2));//4 upper
console.log(Math.floor(3.2));//3 Lower
console.log(Math.sqrt(9));
//Math.Random...............
console.log(Math.random());
/*ex-like when in lucky draw it generate the value from 0 to 1 where 0 is included but 1 is excluded like upto 0.999999*/

// suppose if we multiply it by ten then it generate the value in between like 0.1*10=1 ,0.2*10=2,0.3*10=3;

//use to like generate the OTP
//To generate in between the 1 to 9
console.log(Math.random() * 10);
//to get a Fixed exact value between the 0-9 then do floor

console.log(Math.floor(Math.random() * 10));//generate random value in between the 0-9
//To generate randome number between the 1-10
console.log(Math.floor((Math.random() * 10) + 1));

//1---->6

////0-->0.99999*6+1--------->upto 1to 5;
console.log(Math.floor(Math.random() * 6) + 1);

/**  Formula* */
// Math.floor((Math.random()*(max-min+1)+min)) 

//15----25
console.log(Math.floor(Math.random() * (11)) + 15);

//30-----40
console.log(Math.floor(Math.random() * 10 + 1) + 30);

//50-----65//where 65 is also included
console.log(Math.floor(Math.random() * 15 + 1) + 50);

console.log(Math.floor(Math.random() * 10 + 1) + 90);
//generate OTP
//but we do not prefer to use it because its not secure Way.
//use crypto Library


//String:
/*const str1="String create 
keli";*/

const str2 = "Dusryaa line laa lihili tr error show karte like str1";
const str3 = `hyaa String laa error yennar nahi`;
console.log("Best way to create a String:" + str3);

const day = 18;
console.log(`Strike is coming on:${day}`);//day chyaa aatli value
const str4 = 'Hello Gokul';
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
console.log(str4.slice(-4, -1));//oku

const str5 = 'Gokul';
const str6 = 'Bhor';

const newStr = str5 + str6;//concatanation
console.log(newStr);
console.log(newStr.substring(3, 6));

console.log(24 + 30 + 'Rohit');

console.log(str6.replace('r', 'T'));
console.log(str6.replaceAll('r', 'T'));
//Trim-->remove space from beginning and end
//when we Iterate its on it like in form when we take data must apply trim.
//trimStart() && trimEnd(); method

const name = "name,Rohit,Monu,Pinku,Anjali";
console.log(name.split(","));


/***************Date */
//It takes time from our device..
const now = new Date();//UTC Date which is Just behind the 5:30 hrs fromm
console.log(now);//

//convert into indias time
console.log(now.toString());
console.log(now.toLocaleDateString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());//Month start from Zero
console.log(now.getHours());//like multiple methods.
//days start from 1
//we can also create our own 
const newDate = new Date(2025, 8, 20, 8, 25, 16, 125);
console.log(newDate.toString());

///////////////////////Array

const marks = [100, 90, 80, 50];
console.log(marks);
//we can Hetrogenous type of data in Array:
//in javascript non-primitive data type typeof() is object so Array also object
const marks1 = [100, 20, 'h', "Marathi"];
console.log(typeof (marks1));
console.log(marks1);

//if we want to add new element in array use push()
marks1[1] = 20;
marks1.push(10);
console.log(marks1);
marks1.pop();
//remove one element from last
console.log(marks1);

//add element First
//but this decrease the performance of the System.
marks1.unshift("first");
console.log(marks1);
//remove first element from array
//non primitive data copy refernce 
//primitive data created different copy in memory..
marks1.shift();
console.log(marks1);

const arr = [10, 20, 30, 40];

console.log(arr.slice(1, 4));//20,30,40//it does not affects the original Array..
console.log(arr.splice);//It affects the original Array//

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
}
//for of loop
for (let num of arr) {
    console.log(num);
}
const arr1 = [10, 20, 30, 40];
let sum = 0;
for (let num of arr1) {
    sum += num;

}
console.log(sum);
let arr2 = arr1;//pointing to the same reference
arr2.push(90);
console.log(arr2);


const variable = 30;
variable = 50;
console.log(variable);//generates the error because its constant


const arr3 = [10, 30, 40];
const arr4 = [50, 60, 70];
const arr6 = arr3.concat(arr4);//[[10,30,40],[50,60,70]]
const arr7 = [arr3, arr4, arr6];
///////////////////////////***Spread operator */
const arr8 = [...arr3, ...arr4];//[10,30,40,50,60,70]
console.log(arr8);

/*Join*/
const names = ["Alice", "BOb", "charli"];
console.log(names.toString());
console.log(names.join(" "));

/*simple searching*/
console.log(names.includes("Bob"));

//Ascending order
names.sort();
console.log(names);
names.reverse();

const firstArr = [10, 40, 31, 71, 5, 11];
//In Ascending order..
firstArr.sort((a, b) => a - b);

//-ve :phale a aayega
//+ve:b comes first
console.log(firstArr);

//for in Dsecending order
firstArr.sort((a, b) => b - a);
console.log(firstArr);

//2D Array
const twoDArr = [10, 20, 30, 40, [50, 60, 70], [80, 90], [100, 110], 190];
console.log(twoDArr[4]);//[50,60,70]
console.log(twoDArr[4][2]);//70

console.log(twoDArr[5][1]);//90

let arrp = [1, 2, 3, [4, 5, [6, 7, 8, 9], 10], 60];
console.log(arrp[3]);//[4,5,[6,7,8,9],10]
const newa = arrp.flat(2);
console.log(newa);
const flatArr = twoDArr.flat(2);//2 label tak it removes 2 bracket .

console.log(flatArr);//[10,20,30,40,50,60,70,80,90,[100,110],190]


/*here we cannot calculate the a[i]=base add+index*size;
because here data are in the different size like we can store String,intger,CharacterData so we .
in javascrit Array is object..

suppose
const a=[10,389,"Rohit",9.3,true];
a.name="mohit";
console.log(a);//[10,389,'Rohit',9.3,true,name:'Mohit']
*/

const user1 = {
    name: "Rohit",
    Email: "bhor",
    age: 20,
    "home address": "pune"//better to use 
}
//"name"--------->behind the scene....
user1.age = 21;
user1.mobile = 9284771165;
//console.log(user1);
//console.log(Object.keys(user1));
//console.log(Object.values(user1));
//console.log(Object.entries(user1));//key-value

for (let num in user1) {
    //console.log(num);//get keys
    console.log(num, user1[num]);//key value
}

const onewbj2 = {
    name: "pinku",
    age: 50,
    email: "ram",
    city: "pune"
}
for (let num in onewbj2) {
    // CSSConditionRule.log(num);
    console.log(num, onewbj2[num]);
}

const { city, age } = onewbj2;//object destructing
//or
const { city: cityname, age: newAge } = onewbj2;
console.log(city, age);


//rest Operator
const abc = function fname(...arr1)//Internally create a dymic array.
{
    for (let i in arr1) {
        console.log(i);
    }
}
console.log(abc(10, 20, 30, 40, 50));

let ar = [10, 20, 30, 40];
let array = [50, 60, 70];
const newArr = [...ar, ...array];//spread ooperator.
console.log(newArr);

//Arrow function...
const arrowfun = (num1, num2) => {
    return num1 + num2;
}
console.log(arrowfun(10, 20));
//If we have only one statement..
const arrow = (num1, num2) => (num1 + num2);
console.log(arrow(10, 20));

const findsqr = (num) => num * num;
console.log(findsqr(2));

const findmul = (num1, num2) => num1 * num2;
console.log(findmul(10, 20));

//If we have only one parameter then we can also write..here fun is a function
const sqr=fun=>fun*fun;
console.log(sqr(4));

const para = function MorePara(a, b, c = 0) {
    return a + b;
}
//if we pass only two parameter then its takes automatically one parameter
console.log(para(10, 20));

//IIFE immediateve invoke function

/*(Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined. It is also referred to as a self-executing anonymous function*/

(function greeting()
{
    console.log("at the time declaration invoke");
})();

(()=>{//arrow function
    console.log("hello");
})();

//Call back function
/*A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. This technique allows a function to call another function once a task is completed, making it fundamental for handling asynchronous operations in JavaScript.*/
 
function first()
{
    console.log("first exscute the second function then execute the first function");
}
function fun2(callback)
{
    console.log("I want to call this function first");
    callback();
    console.log("first call the first frinction th");
}
console.log(fun2(first));

//eXample:
function payment(amount,callback,amnt)
{
    console.log(`${amount} payment initialized`);
    console.log("payment is received");
    callback();
    //we can do this after but before ordrr must start 
    forDeliveryBoy(amnt);  
}
payment(500,zomatoordered,10);
payment(300,blinketOrder,3);
function zomatoordered()
{
    console.log("orderd has been started:Zomato");
}
function blinketOrder()
{
    console.log("Blinket order has been started:Blinket");
}
function forDeliveryBoy(amnt)
{
    console.log(`payment for the delivery boy:${amnt}`);
}

console.log(s);//undefined
var s=101;

//but if we declare then its declare the
console.log(vari);//generate error same for const...

let vari=10;
