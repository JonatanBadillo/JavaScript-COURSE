// Data Types
var name = "Jonatan"; // String
console.log(name);

// Type of
name = 10.5;
console.log(typeof name);

var number = 1000; // Numeric type
console.log(number); 

var object = { // Object Type
    name : "Enrique",
    lastName : "Badillo",
    telephone : "55443322"
} 

console.log(object);
console.log(typeof object)

var flag = true; // Boolean Type
console.log(flag);
console.log(typeof flag);

function myFunction(){ }// Function type
console.log(myFunction);
console.log(typeof myFunction)

var symbol = Symbol("my symbol") // Symbol Type
console.log(symbol);
console.log(typeof symbol);

class Person{ // Class type is a function
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
}
console.log(Person)
console.log(typeof Person);

// Undefined Type
var x;
console.log(typeof x);

// null = no value
var y = null;
console.log(y);
console.log(typeof y)
