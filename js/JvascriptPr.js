const product=document.getElementById("products");
//product.innerText="Buy now";
const li=document.createElement("li");

li.innerText="Buiscuit";
product.prepend(li);
//product.after(li);
const secondli=document.createElement("li");
//product.before(secondli);
secondli.textContent="chips";
product.append(secondli);
li.style.color="green";
secondli.style.color="brown";
li.before(secondli);
console.log(product);



const arr=["chips","Milk","Buiscuit","Tea-powder","sugar"];
const fragment=document.createDocumentFragment();
for(let Item of arr)
{
    const newItem=document.createElement("li");
    newItem.textContent=Item;
   //product.append(newItem);
fragment.appendChild(newItem);

}//But it is not optimal way we can also use the 

product.appendChild(fragment);

//delete the any Element ...

const welcome=document.getElementById("welcome");
console.log(welcome);
welcome.remove();


let p=new Promise((Resolve,reject)=>
{
    let n=10;
    if(n%2==0)
    {
        resolve("promise fullfilled");
    }
    else{
        reject("reject");
    }
})
p.then((val)=>
{
    
})
p.catch((val)=>{
    
})

