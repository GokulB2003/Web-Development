const input=document.querySelector("input");
const addtext=document.querySelector(".btn");
const Task=document.querySelector(".taskList");
const show=document.querySelector(".btn1");
const remove=document.querySelector(".remove");
let arr=[];
addtext.addEventListener("click",()=>{
    if(input.value==="")
    {
        alert("Enter the task first");
        return;
    }
    const li=document.createElement("li");
    li.innerText=input.value;
    Task.appendChild(li);
    // input.value="";
})
show.addEventListener("click",()=>{
        if(input.value=="")
        {
            alert("first add task");
        }
        Task.style.display="block";
    })
remove.addEventListener("click",()=>{
    if(Task.length==0)
    {
        alert("task removed");

    }
    input.innerHTML="";
    alert("task removed");
})