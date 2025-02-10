//function declaration
function greet(name){
    return `Hello,${name}!`;
}
console.log(greet("saniya"));
//function expression
const wishes = function(name){
    return `Hello,${name}`;
}
console.log(wishes("maheen"));
//array function
let nam= (name)=>`hello,${name}`;
console.log(nam("thabbu"));
//immediately invoked function expression
(function(){
    console.log("zunairiya");
})();
//call back function
let greetf1 = (name)=>{
    console.log(`Hello,${name}`);
} 
function processName(callback){
    const name="alina";
    callback(name);
}
processName(greetf1);
