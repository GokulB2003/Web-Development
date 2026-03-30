let inputdata=document.getElementById("inputdata");
let btn=document.getElementById("btn");
let result=document.getElementById("result");


btn.addEventListener('click',()=>{
    let email=inputdata.value;
    let h1=document.createElement("h1");
    //check length
    if(email.length==0)
    {
        h1.innerHTML="Email Length not be Zero";
        h1.style.color="red";
         result.appendChild(h1);
        return;
    }

    //check Spaces
    if(!(email.indexOf(" ")==-1))
    {
        result.innerHTML="";
        h1.innerHTML="Email contains space:";
        h1.style.color="red";
        result.appendChild(h1);
        return;
        
    }
    //check @
    let findex=email.indexOf('@');
    let lastindex=email.lastIndexOf('@');

    if(findex!=lastindex || findex==-1 ||findex==0 ||findex==email.length-1)
    {
        result.innerHTML="";
        h1.innerHTML="check ＠ symabol";
        h1.style.color="red";
        result.appendChild(h1);
        return;
    }

    //dot after the '@'
    let dot_index=email.indexOf(findex,'.');
    if(dot_index==-1)
    {
        result.innerHTML="";
        h1.innerHTML="Email must be contains atleat one dot";
        h1.style.color="red";
        result.appendChild(h1);
        return;
    }

    //dot should not be immediatlty after the '@'
    if(dot_index==findex+1 || dot_index==findex-1)
    {
        result.innerHTML="";
        h1.innerHTML="dot should not be after the @";
        h1.style.color="red";
        result.appendChild(h1);
        return;
    }

    //after @ must be a gmail.com
    let rem_part=email.subString(findex+1,6);
    console.log(rem_part);
    if(!rem_part.equals("gmail"))
    {
         result.innerHTML="";
        h1.innerHTML="must contains a gmail";
        h1.style.color="red";
        result.appendChild(h1);
        return;
    }
    //10
    //8
    let last_dot=
    email.lastIndexOf('.');
    if(last_dot<=email.length-3)
    {
         result.innerHTML="";
        h1.innerHTML="dot should not be before the .com";
        h1.style.color="red";
        result.appendChild(h1);
        return;
    }
     result.innerHTML="";
        h1.innerHTML="👍valid Email";
        h1.style.color="green";
        result.appendChild(h1);
        return;

    


    


    

   


})
