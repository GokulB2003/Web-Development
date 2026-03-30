let input=document.getElementById("input");
//console.log(input);
let display=document.getElementById("display");
//console.log(display);

// let table=document.getElementById("table");
//console.log(table);

let tbdata=document.getElementById("tableData");
display.addEventListener("click",()=>{
let table=document.createElement("table");
    
   let inval=(input.value);
   if(inval.length==0)
   {
    alert("Please enter a number");
    return;
   }
   tbdata.innerHTML="";
   //console.log(inval);
   for(let i=1; i<=10; i++){
    let pro=Number(inval)*i;
    console.log(pro);
    let row=document.createElement("tr");
    let td=document.createElement("td");
    td.textContent=pro;
    row.appendChild(td);
    table.appendChild(row);
   

   }
    tbdata.appendChild(table);
    tbdata.style.display="block";
    tbdata.style.border="1px solid black";

   input.value="";


})