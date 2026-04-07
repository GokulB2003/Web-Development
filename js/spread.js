/*let arr=[10,20,30,40];
let arr1=[11,12,13,14];
let newarr=[...arr,...arr1];
newarr.forEach(result);
function result(num)
{
    console.log(num*2);
}

//copying the object
let obj1={
    name:"Ram",
    city:"pune",
    village:"pathardi"
}
let obj={
    ...obj1,
    city:"nashik"
}
console.log(obj);*/

//function argument
/*let ans=function abc(x,y,z)
{
    return x+y+z;
}
let arr=[1,2,3];


console.log(ans(...arr));
//console.log(newarr);
*/
//Rest Operator
function add(...num)
{
    for(let i=0; i<num.length; i++)
    {
        console.log(num[i]);
    }
}

add(10,20,30,40,50,60,70);
