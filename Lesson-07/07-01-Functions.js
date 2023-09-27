// Functions
console.log('Functions');
// Hoisting
myFunction(10,2);
// Function Declaration
function myFunction(a, b){
    console.log(a + ' + ' + b + ' = ' + (a+b));
}

// Calling the function
myFunction(3,2);

// Return
function newFunction(a,b){
    return a + b;
}

result = newFunction(5,4);
console.log(result);

// Declaration Functions Expression
let x = function(a,b){return a+b};

result = x(1,2);
console.log(result);

// Self Invoking in JavaScript

(function(){
    console.log('Executing the function');
})();