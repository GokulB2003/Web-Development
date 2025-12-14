const btnA=document.querySelector(".btn1");
const btnB=document.querySelector(".btn2");
const btnC=document.querySelector(".btn3");

btnA.addEventListener("click",()=>{
    alert("Button is clicked");
})

btnB.addEventListener("click",()=>{
    alert("2nd button clicked");
})

btnC.addEventListener("click",()=>{
   confirm("Are you Sure?");
  const abc= prompt("Enter your name:");
  console.log(abc);
})

btnC.addEventListener("click",()=>{
        btnA.display("flex");
})
