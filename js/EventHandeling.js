
/*function handle()
{
    const goodmorning=document.getElementById("h2");
    goodmorning.innerText="Chalo ab kalm pe lag jao";
    goodmorning.innerHTML="<h2>Chalo ab kalm pe lag jao</h2>";
}
*/
//it override the content so we not use it////////
 const goodmorning=document.getElementById("h2");
 goodmorning.addEventListener(('click'),()=>{
    goodmorning.innerText="Chalo ab kalm pe lag jao";
    goodmorning.style.backgroundColor="pink";
 });
 goodmorning.addEventListener(('click'),()=>{
    goodmorning.style.color="green";
    goodmorning.style.fontStyle="italic";
 });
