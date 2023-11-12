let myFunction = function(){
    console.log('Hello from my Function');
}

// Arrow Function
// Hoisting not applicable
// const myArrowFunction = () => {
//     console.log('Hello from Arrow Function');
// }

const myArrowFunction = () => console.log('Hello from Arrow Function');

myFunction();

myArrowFunction();

// const hello = () => {
//     return 'hello from Arrow Function'
// }

const hello = () => 'hello from Arrow Function'; 

console.log(hello());

const returningObject = () => ({name:'Juan'})
console.log(returningObject())