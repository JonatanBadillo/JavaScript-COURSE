// Arrays
console.log('Arrays');

// let cars = new Array('BMW','Mercedes Benz','Volvo');
const cars =  ['BMW','Mercedes Benz','Volvo'];
console.log(cars);

// Accessing to the elements
console.log(cars[0]);
console.log(cars[2]);

// Accessing to all the elements
for(let i = 0;i < cars.length ;i++){
    console.log(cars[i]);
}

// Modifying elements of the array
cars[1] = 'Audi'
console.log(cars);

// Adding new elements
cars.push('Ferrari');
console.log(cars);