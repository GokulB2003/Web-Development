
let data=fetch('https://fakestoreapi.com/products')
data.then((d)=>d.json().then((obj)=>{

let show=document.getElementById("show");

 for(let i=0; i<30; i++)
    {
        let item=document.createElement("img");
        let h1=document.createElement("h1");
        let title=document.createElement("h2");
        item.setAttribute("src",obj[i].image);
        h1.innerText=obj[i].price;
        title.innerHTML=obj[i].title;
        show.appendChild(title);
        show.appendChild(item);
        show.appendChild(h1);
    }

//console.log(obj.image);
//item.innerText=obj.image;

})).catch(()=>console.log("Error"));
