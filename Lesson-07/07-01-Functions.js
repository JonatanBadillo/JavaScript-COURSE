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

console.log(typeof myFunction);

var myFunctionText = myFunction.toString();
console.log(myFunctionText);

// Arrow Functions
const arrowFunction = (a,b) => a+b;
console.log(arrowFunction(5,5));

// Parameters of a function
let operation = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

result = operation(5,3);
console.log(result);

// Operations with parameters EXAMPLE
function addEverything(){
    let resultOperation = 0;
    for(let i = 0 ; i < arguments.length ; i++){
        resultOperation += arguments[i];
    }
    return resultOperation;
}

result = addEverything(5,4,13,10,9);
console.log(result);

 // Parameter by value
 let a = 10;

 function changingValue(x){
    x = 20;
    return;
 }

 changingValue(a);
 console.log(a);


 // Parameters by reference

 const person = {
    name: 'Jony',
    lastname: 'Badillo'
 }

 function changingValueObject(p1){
    p1.name = 'Jonatan';
 }

 
changingValueObject(person);
 console.log(person);