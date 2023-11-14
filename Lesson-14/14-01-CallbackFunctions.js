function myFunction1(){
    console.log('Function 1');
}

function myFunction2(){
    console.log('Function 2');
}

myFunction1();
myFunction2();

// CALLBACK FUNCTIONS
function print(msg){
    console.log(msg);
}

function add(op1,op2, print){
    let res = op1 + op2;
    print('Result: ' + res); // calling the function
}

add(2,5,print);