let input = document.getElementById("inputd");
let button = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener('click', () => {
    let inval = (input.value);
    console.log(inval);

    if (!inval) {
        alert("please inter a valid number");
        return;
    }
     let flag=true;
      if (!(inval.charAt(0) >= '6' && inval.charAt(0) <= '9') || (!(inval.length==10)))
      {
            flag =false;
            
      }
        for (let i = 0; i < inval.length; i++) {
            if (!(inval.charAt(i) >= '0' && inval.charAt(i) <= 9)) {
                flag = false;
                break;
            }

        }

    if(flag===true ) {
        result.innerHTML=" ";
        let h2=document.createElement("h2");
        h2.innerText="👍valid number";
        result.appendChild(h2);
        result.style.color="green";
       input.value="";
    }
    else
    {
        result.innerHTML=" ";
        let h2=document.createElement("h2");
        h2.innerText="❌Invalid number";
        result.appendChild(h2);
        result.style.color="red";
       input.value="";
    }
    


})