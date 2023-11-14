let myPromise = new Promise((resolve, rejected) => {
    let expression = true;
    if(expression){
        resolve('Resolved correctly');
    }else{
        rejected('An error ocurred');
    }
});

myPromise.then(
    value => console.log(value),
    error => console.log(error)
);