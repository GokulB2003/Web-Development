/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is 
defined. 
 It is wrapped in parentheses to make it a function expression 
 Immediately followed by () to invoke it 
Syntax 
(function() { 
console.log("This runs immediately!"); 
})(); */
((x,y)=>{
    console.log(x+y);
})(10,20);