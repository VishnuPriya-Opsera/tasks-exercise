//function declaration
function func1(a,b) {
    console.log("function declaration");
    console.log(a+b);
}
// function calling
let sum1= func1(1,2);
// function expression
const func2 = function(a,b){
    console.log("function expression");
    console.log(a+b);
}
//function calling
let sum2= func2(4,5);
// arrow function
let func3 =(a,b)=> {
    console.log("arrow function")
    console.log(a+b);
}
// function calling
console.log(func3(7,8));