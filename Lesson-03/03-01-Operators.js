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