let input=document.getElementById("input");
console.log(input);
let display=document.getElementById("display");
console.log(display);

let table=document.getElementById("table");
console.log(table);

display.addEventListener("click",()=>{
   let inval=Number(input.value);
   console.log(inval);
   for(let i=1; i<=10; i++){
    let pro=Number(inval)*i;
    console.log(pro);
    let row=document.createElement("tr");
    let td=document.createElement("td");
    td.textContent=pro;
    row.appendChild(td);
    table.appendChild(row);
   }

})