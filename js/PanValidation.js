//let result=document.getElementById("result");
let btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    let p=document.getElementById("result");
    console.log(p);
    p.innerHTML="";
    let val=document.getElementById("pannum").value;
    console.log(val);
    let flag=true;
    if(val.length!=10)
    {
        console.log(val.length);
        flag=false;
     
    }
    else
    {
        for(let i=0; i<5; i++)
    {
        if(!(val.charAt(i)>='A' && val.charAt(i)<='Z'))
        {
            flag=false;
           
        }
    }
    for(let i=5; i<9; i++)
    {
        if(!(val.charAt(i)>='0' && val.charAt(i)<='9'))
        {
            flag=false;
           console.log("false"); 
        }
    }
   if(!(val.charAt(val.length-1)>='A' && val.charAt(val.length-1)<='Z'))
   {
    flag=false;
   }

    }
    if(flag==true)
    {
        let h1=document.createElement("h1");

        h1.innerHTML="✅valid Pan Number";
        p.appendChild(h1);
        p.style.color="green";
    }
    else
    {
        let h1=document.createElement("h1");

        h1.innerHTML="❌Not Valid";
        p.appendChild(h1);
        p.style.color="red";
        // h1.innerHTML="";
        // p.appendChild(h1);
    }
    

})