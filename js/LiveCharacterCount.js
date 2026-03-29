
let count=document.getElementById("count-char");
let len=0;
let input=document.getElementById("textinput");
let display=document.getElementById("display");
display.style.marginTop="10px";
display.style.color="blue";
input.addEventListener('keyup',()=>{
let inval=input.value;
//let str=inval.tostring();

let s=inval.trim();

len=s.length;

//console.log(input);
//alert(len);

count.innerHTML=`${len}/100`;
if(len>50)
{
count.style.color="red";
}
else{
    count.style.color="green";
}
})
display.addEventListener('click',()=>{
    alert(len);
})