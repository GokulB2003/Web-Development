let display=document.getElementById("display");
let count=0;
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    let arr={
        name:"John",
        age:30,
        city:"new York"
    }
    setInterval(()=>{
        let h1=document.createElement("h1");
        h1.textContent=`${arr.name}`;
        setInterval(()=>{
            let p=arr.age++;
            h1.textContent=p;
            
            display.appendChild(h1);
            },10000);
        display.appendChild(h1);
    },10000);
})
