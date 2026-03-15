/*Every Async function returns a promise. If the function throws an error, the promise will be rejected. If the function returns a value, the promise will be resolved with that value.*/
/*let response=async function check(num)
{
    if(num%2==0)
    {
        //return "Even";//Or
        return new Promise((resolve,reject)=>{
            resolve("Even");
        });
    }
    else
    {
        //return "Odd";
        return new Promise((resolve,reject)=>{
            reject("ODD");
        });
    }
}
let ans=response(10);
ans.then((data)=>{
    console.log(data);
})
ans.catch((er)=>{
    console.log(er);
})
ans.finally((data)=>{
    console.log("data fetched successfully:");
})
*/

/*fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    data.json();
}).then((data)=>console.log(data));
*/
//await jo paryant operation hot nahi to paryant wait kar and nantrch pudhchi line execute kar...
/*const response=await fetch("https://jsonplaceholder.typicode.com/users");//we got the response in byte format...
const data=await response.json();//we convert this data into a object
//but here our program freeze or wait for 5-20 sec it is not good approach...
//but javascript doesn't wait..always use await with async
console.log(data);
*/

//put this data in async function...
const ans=async function handle(){

const response=await fetch("https://api.github.com/users");//
const data=await response.json();//we convert this data into a object
console.log(data);//web API kde janaar....


const parent=document.getElementById("first");
for(let user of data)
{
    const elemnt=document.createElement("div");
    elemnt.classList.add("user-card");

    const image=document.createElement('img');
    image.src=user.avatar_url;
    const username=document.createElement('h2');
    username.textContent=user.login;
 
    const anchor=document.createElement('a');
    anchor.href=user.html_url;
    anchor.textContent="View Profile";  

    elemnt.append(image,username,anchor);

    parent.append(elemnt);

}
    
}
const result=ans();
console.log("first execute this then async function:");




