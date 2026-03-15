const orderDetails={
    orderId:123123,
    food:["Pizza","Biryani","coldrinks"],
    cost:900,
    customer_name:"Aman",
    customer_location:"pune-Maharashtra",
    customer_mobile:91919293294,
    restaurent_location:"Mumbai",
    
}

function placeOrder(orderDetails,callback)
{
    console.log("Make payment");
    console.log(`:${orderDetails.cost}`);
    setTimeout(()=>{
        console.log("payment is received and order get placed");
       callback(orderDetails);
    },3000);
}

function prepareorder(orderDetails,callback)
{
    console.log(`Your ${orderDetails.food} food preparation Started:`);
    setTimeout(()=>{
        console.log(`${orderDetails.customer_name} Your order is now prepared`);
        orderDetails.token=123;
        callback(orderDetails);
    },3000);
}
function pickupOrder(orderDetails,callback)
{
    console.log(`Delivery boy is on the way Location: ${deliverdOrder.customer_location}`);
    setTimeout(()=>{
        console.log(`I have pick up the order from: ${deliverdOrder.restaurent_location}`);
        
        callback(orderDetails);
    },3000);
}
function deliverdOrder(orderDetails)
{
    console.log("Delivery boy on the way:please wait....");
    setTimeout(()=>{
        console.log("Your order will deliverded withi half an hour we will call You,STAY TUNED");
    },3000);
}
//pickupOrder();
//call back Hell...call back inside another call back then inside another call Back
placeOrder(orderDetails,()=>{
    prepareorder(orderDetails,()=>{
        pickupOrder(orderDetails,()=>{
            deliverdOrder(orderDetails);
        })
    });

})




