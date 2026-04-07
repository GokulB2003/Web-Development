/*let name="sagar";
console.log(`my name is:${name}`);
*/
/*let text=`hello
good morning`;
console.log(text);
*/

//function currying
function add(a){
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