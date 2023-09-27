// Operators
let a = 3, b = 2;
let z = a + b;
console.log("The result of the addition is: " + z);

z = a - b;
console.log("The result of the substraction is: " + z);

z = a * b;
console.log("The result of the multiplication is: " + z);

z = a / b;
console.log("The result of the division is: " + z);

z = a % b;
console.log("The residue is: " + z);

z = a ** b;
console.log("The result with the exponent is: " + z);




// ----------------------------------------------
// Pre-Increase with ++ before the variable
z = a + b;
z = ++a;
console.log('Pre-Increase');
console.log(a);
console.log(z);

// Post-Increase with ++ after the variable
z = b++;
console.log('Post-Increase');
console.log(b);
console.log(z);

// Pre decrement - before the variable
z = --a;
console.log('Pre-Decrement');
console.log(a);
console.log(z);


// Post decrement -- after the variable
z = b--;
console.log('Post-Decrement');
console.log(b);
console.log(z);

// ----------------------------------------------
// Assignment Operators
console.log('Assignment Operators')
a = 10;
console.log(a);

a += 1;
console.log(a);

a -= 2;
console.log(a);

a *= 3;
console.log(a);

// ----------------------------------------------
// Comparison Operators
a = 4;
b = 2;

let result = a == b;
console.log('Result: ' + result);

result = a != b;
console.log('Result: ' + result);

result = a > b;
console.log('Result: ' + result);


result = a >= b;
console.log('Result: ' + result);

// ----------------------------------------------
// Exercise Even or Odd number
console.log('Exercise Even or Odd number');
a = 15;
if (a % 2 == 0){
    console.log('Even Number')
}else{
    console.log('Odd Number')
}


// ----------------------------------------------
// Exercise Adult Person
console.log('Exercise Adult Person')
let age = 18
if (age >= 18){
    console.log('You are an adult person');
}else{
    console.log('You are not an adult person');
}


// ----------------------------------------------
// Ternary Operator
console.log('Ternary Operator');

result = (3>2) ? 'true' : 'false';
console.log(result);




// ----------------------------------------------
// Convert String to a Number
console.log('Convert String to a Number');

let myNumber = '10';
console.log(typeof myNumber);


let myAge = Number(myNumber);
console.log(typeof myAge);

