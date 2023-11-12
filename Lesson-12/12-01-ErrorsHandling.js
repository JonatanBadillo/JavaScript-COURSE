'use strict'

try{
    let x = 10;
    throw 'My error';
}catch(error){
    console.log(error);
}finally{
    console.log('Finishing the bug check');
}
console.log('error');

