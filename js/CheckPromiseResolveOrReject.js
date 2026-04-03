/*let p=new Promise((resolve,reject)=>{
    let no=11;
    if(no%2==0)
    {
        resolve("Even");
    }
    else
    {
        reject("not Even");
    }

}).then((m)=>console.log(m));
p.catch((m)=>console.log(m));
*/
/*
let p=new Promise((resolve,reject)=>{
    str="hello";
    if(str.length==0)
    {
        reject("lenegth is Zero");
    }
    else
    {
        resolve("String length is greater than zero:");
    }


});
p.then((m)=>console.log(m)).catch((m)=>console.log(m));
*/
let apidata = document.getElementById("tableData");
let data = fetch('https://jsonplaceholder.typicode.com/todos');
//console.log(data);
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");
btn.addEventListener('dblclick', () => {
    tbody.innerHTML = "";
})


btn.addEventListener('click', () => {

    data.then((res) => {
        let d = res.json();
        
        // tbody.style.border="1px solid black";
        d.then((result) => {
            //console.log(result.userId+" "+result.title+" "+result.completed);
            for (let i = 0; i < result.length; i++) {
                let id = result[i].userId;
                let title = result[i].title;
                let status = result[i].completed;

                let row = document.createElement("tr");
                let tid = document.createElement("td");
                tid.textContent = id;

                tid.style.height = "40px";
                tid.style.textAlign = "center";
                row.appendChild(tid);
                let ttitle = document.createElement("td");
                ttitle.textContent = title;
                row.appendChild(ttitle);

                let tstatus = document.createElement("td");
                tstatus.innerHTML = status;
                tstatus.style.height = "40px";
                tstatus.style.textAlign = "center";
                row.appendChild(tstatus);
                tbody.appendChild(row);

            }
        }).catch((e) => console.log(e));
    }).catch((error) => console.log(error));

})
