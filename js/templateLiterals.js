/*let name="sagar";
console.log(`my name is:${name}`);
*/
/*let text=`hello
good morning`;
console.log(text);
*/

//function currying
/*function add(a){
    return function (b){
        return function (c)
        {
            return a+b+c;
        };
    };

};
console.log(add(10)(20)(30));
let arr=[1,2,3,4,5];
for(let i of arr)
{
    console.log(i);
}
*/

//difference between the map and for each
//map supports chaining concept but the for Each not support for the chaining.
//map returns always new Array but for each is use for iterate the Array we can't return the array and if we try to return it siply print the undefined.
/*let arr=[10,20,30,40];
let ans=arr.map((num)=>{
    return num*2;
}).filter((n)=>{
    if(n>20)
    {
        return n;
    }
})
console.log(ans);

/*
//difference between the filter and find
| Feature           | `filter()`            | `find()`                    |
| ----------------- | --------------------- | --------------------------- |
| Return type       | Array                 | Single value                |
| Number of results | All matching elements | First matching element only |
| If no match       | Empty array `[]`      | `undefined`                 |
| Iteration         | Checks all elements   | Stops after first match     |
*/
/*let arr=[10,20,30];
let ans=arr.filter(result);
function result(num)
{
    if(num>10)
    {
        return num;
    }
}
console.log(ans);
console.log(arr.find(result));
*/
//reduce function
/*reduce() is an array method used to reduce (combine) all elements of an array into a single value. */
/*reduce() is used to transform an array into a single value by applying a function on each element." */

let arr=[10,20,30,40];
/*let ans=arr.reduce((accumelator,currentValue)=>{
        return (accumelator+currentValue);

});
console.log(ans);
*/
//check variable is isArray...
//console.log(Array.isArray(arr));

//instanceof is used to check whether an object is an instance of a specific constructor or class."
/*class Animal
{

}
class Dog extends Animal
{

}
let d=new Dog();
console.log(d instanceof Animal);

*/
//Array destructuring...
/*let fruits=["apple","banana","mango","watermelone"];
let arr1=fruits;
arr1=fruits;
arr1.forEach((item)=>{
    console.log(item);
});
*/
/*let x=5,y=10;
[x,y]=[y,x];
console.log(x);
console.log(y);
*/
//shallow copy..
/*let arr2=[...arr];
console.log(arr===arr2);
console.log(arr2);
*/
/*let arr2=[60,70,80,90];
let mergeArr=[...arr,...arr2];
console.log(mergeArr);
*/
/*Insert the Element at specific Position.
let ans=arr.splice(2,0,12);
console.log(arr);
*/
//for delete a specific element..
/*let ans=arr.splice(2,1);
console.log(arr);
*/
let str="hello world";
// let ans=str.replace('h','c');
// console.log(ans.slice(3,5));
// console.log(ans.substring(2,ans.length-1));
// //console.log(ans.splice(2,1));
// console.log(ans);

//let arr2=str.split("");
/*let arr2=[...str];
console.log(arr2);
*/

/*const arr1=Array.from(str);
console.log(arr1);
*/

/*let str1=arr.toString();
console.log(str1);
*/
let index=str.indexOf('d',3);
console.log(index);


