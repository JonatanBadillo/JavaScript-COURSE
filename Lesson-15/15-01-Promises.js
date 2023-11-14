let myPromise = new Promise((resolve, rejected) => {
    let expression = false;
    if(expression){
        resolve('Resolved correctly');
    }else{
        rejected('An error ocurred');
    }
});

//myPromise.then(
//    value => console.log(value),
//    error => console.log(error)
//);


// Other manner of applying promises
myPromise.then(value => console.log(value)).catch(error => console.log(error));

let promise = new Promise((resolved) =>{
    setTimeout( ()=>{ resolved('Hello with Promise and TimeOut',3000)});
});

promise.then( value=> console.log(value));