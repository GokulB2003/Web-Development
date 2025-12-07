
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





