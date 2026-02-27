/*let wet=document.getElementById("wet-n");
wet.style.backgroundColor = "pink";
let foot=document.getElementsByClassName('footer');

console.log(classBase[0]);
console.log(wet);*/


const element=document.createElement("h2");
element.textContent="hello welcome";
// element.id="second";
console.log(element);
const footerp=document.getElementById("footer-m");
footerp.after(element);
element.style.display="flex";
element.style.flexDirection="row";
element.style.justifyContent="center";
element.style.color="Red";

//class keyword is reserved so that why we cannot write..class
//element.className("classn");
element.classList.add("Diwali");//best way
// element.classList("Holi");
element.style.backgroundColor="pink";
console.log(element.getAttribute("Diwali"));

element.setAttribute("hello","ji");
console.log(element.getAttribute("hello"));

a.forEach((val)=>console.log(val));
a.filter(myfunction());
function myfunction(val,index,a)
{
    if(val%2==0)
        return val;

}

let result=a.every(myfunction());


