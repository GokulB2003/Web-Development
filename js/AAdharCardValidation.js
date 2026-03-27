let input=document.getElementById("adhar");
let btn=document.getElementById("btn");


//console.log(val);
 let span=document.getElementById("s");
function check()
{

    let val=input.value;
    console.log(val);
    let flag=true;
   
    if(val.length==12)
    {
        for(let i=0; i<val.length; i++)
        {
            if(!((val.charCodeAt(i)>=48 && val.charCodeAt(i)<=57)))
            {
                console.log(val+"hello");
                span.style.color="red";
                span.innerHTML="Invalid Aadhar number";
                flag=false;

                break;
            }
            
        }
        if(flag==false || val.charAt(0)==='0')
        {
            span.innerHTML="Invalid Aadhar number";
            span.style.color="red";
        }
         if(flag==true)
    {
        span.innerHTML="valid Aadhar number";   
        span.style.color="green";
         
    }
    }
    else
    {
        span.style.color="red";
        span.innerHTML="Invalid AAdhar Number";
    }
   
    /*if(val.length===0)
    {
        alert(val);
        span.innerHTML="";
    }
    */

}


