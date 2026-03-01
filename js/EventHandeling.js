
/*function handle()
{
    const goodmorning=document.getElementById("h2");
    goodmorning.innerText="Chalo ab kalm pe lag jao";
    goodmorning.innerHTML="<h2>Chalo ab kalm pe lag jao</h2>";
}
*/
//it override the content so we not use it////////
 /*const goodmorning=document.getElementById("h2");
 goodmorning.addEventListener(('click'),()=>{
    goodmorning.innerText="Chalo ab kalm pe lag jao";
    goodmorning.style.backgroundColor="pink";
 });
 goodmorning.addEventListener(('click'),()=>{
    goodmorning.style.color="green";
    goodmorning.style.fontStyle="italic";
 });

 const guys=document.querySelector(".guys");
 console.log(guys);
 guys.addEventListener('dblclick', ()=>{
    guys.innerText="Guys lets Enjoy, have a nice Day...";
    console.log(guys);
   guys.style.backgroundColor="green";
   guys.style.color="red";
   guys.innerText="guys we have a break and we will meet just after half an hour...";
 });
 */


 //for boxes javascript
const parent=document.querySelector(".box"); //Acess parent in the form of collction and now iterate its using for loop....
console.log(parent);

 const box1=document.querySelector(".box1");
 const box2=document.querySelector(".box2");
 const box3=document.querySelector(".box3");
 const box4=document.querySelector(".box4");
 const box5=document.querySelector(".box5");
 const firstheading=document.querySelector("#firstheading");

 const secondheading=document.getElementById("secondheading");
 const thirdheadign=document.getElementById("thirdheading");
  const fourthheading=document.getElementById("fourthheading");
   const fifthheading=document.getElementById("fifthheading");

 box1.addEventListener('mouseover',()=>{
 box1.style.backgroundColor="green";
   box1.style.width="500px";
   firstheading.style.color="black";
   firstheading.style.textAlign="center";
   box1.textContent="I am Clicked";

 });
 box1.addEventListener('mouseout',()=>{
  box1.style.backgroundColor="red";
  box1.style.width="100px";
     box1.textContent="first";
 });

for(let child of parent.children)
{
   console.log(child);
   child.addEventListener('mousemove',()=>{
      child.style.width="500px";
      firstheading.style.textAlign="center";
      
   })

   child.addEventListener('mouseout',()=>{
      child.style.width="100px";

   })
}


