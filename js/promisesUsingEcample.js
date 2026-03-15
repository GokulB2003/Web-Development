const orderDetails={
    orderId:123123,
    food:["Pizza","Biryani","coldrinks"],
    cost:900,
    customer_name:"Aman",
    customer_location:"pune-Maharashtra",
    customer_mobile:91919293294,
    restaurent_location:"Mumbai",
    
}

function placeOrder(orderDetails)
{
    
    console.log("Make payment");
    console.log(`:${orderDetails.cost}`);

   return new Promise((resolve,reject)=>{
    if(Math.random()>0.1)
    {
     setTimeout(()=>{
        console.log("payment is received and order get placed");
      // callback(orderDetails);
       resolve(orderDetails);
    },3000);
}
else
{
    reject("Error in Payment please make payment Again");
}

   })
  
    
}

function prepareorder(orderDetails)
{
    console.log(`Your ${orderDetails.food} food preparation Started:`);

    return new Promise((resolve,reject)=>{
        
          setTimeout(()=>{
        console.log(`${orderDetails.customer_name} Your order is now prepared`);
        orderDetails.token=123;
        resolve(orderDetails);
       // callback(orderDetails);
    },3000);
    

    })
   
 
}
function pickupOrder(orderDetails)
{
    console.log(`Delivery boy is on the way Location: ${orderDetails.customer_location}`);
   return new Promise((resolve,reject)=>{

         setTimeout(()=>{
        console.log(`I have pick up the order from: ${orderDetails.restaurent_location}`);
        resolve(orderDetails);
        //callback(orderDetails);
    },3000);
   })


}
function deliverdOrder(orderDetails)
{
    console.log("Delivery boy on the way:please wait....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Your order will deliverded withi half an hour we will call You,STAY TUNED");
        resolve(orderDetails);
    },3000);
    })

  
}
//pickupOrder();
//call back Hell...call back inside another call back then inside another call Back
/*
placeOrder(orderDetails,()=>{
    prepareorder(orderDetails,()=>{
        pickupOrder(orderDetails,()=>{
            deliverdOrder(orderDetails);
        })
    });

})
*/
//using promise
/*placeOrder(orderDetails)
.then((orderDetails)=>prepareorder(orderDetails))
.then((orderDetails)=>pickupOrder(orderDetails))
.then((orderDetails)=>deliverdOrder(orderDetails))
.catch((error)=>{
    console.log(error.message);
})
.finally(()=>{
    console.log("cleaning the data");
});
*/


//using async and await
async function orders()
{
    try{

        const response1=await placeOrder(orderDetails);
        const response2=await pickupOrder(orderDetails);
        const response3=await deliverdOrder(orderDetails);

    }
    catch(er)
    {
        console.log(er);
    }
}
orders();

