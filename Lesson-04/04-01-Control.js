// If / Else
let condition = true;
if(condition){
    console.log('True Condition');
}else{
    console.log('False Condition');
}


// ----------------------------------------------
// else if
let  number = 3;
if(number == 1){
    console.log('Number One');
}else if(number == 2){
    console.log('Number Two');
}else if(number == 3){
    console.log('Number Three');
}else{
    console.log('Unknown number');
}

// ----------------------------------------------
// Exercise Seasons of the Year
console.log('Exercise Seasons of the Year:');
let month = 4;
let season;

if(month == 1 || month == 2 || month == 12){
    season = 'Winter';
}else if(month == 3 || month == 4 || month == 5){
    season = 'Spring';
}else if(month == 6 || month == 7 || month == 8){
    season = 'Summer';
}else if(month == 9 || month == 10 || month == 11){
    season = 'Autumn';
}else{
    season = 'Unknown season';
}

console.log(season);



// ----------------------------------------------
// Exercise Calculate the hour
console.log('Calculate the hour:');
let hour = 5;
if(hour>=6 & hour<=11){
    console.log('Good Morning');
}else if(hour>=12 & hour<=18){
    console.log('Good afternoon');
}else if(hour>=19 & hour<=24){
    console.log('Good night');
}else if(hour>=0 &  hour<=5){
    console.log('Sleeping');
}


// ----------------------------------------------
// Switch
console.log('Switch');
number = 2;
let textNumber = 'Unknown value';

switch(number){
    case 1 :
        textNumber = 'one';
        break;
    case 2: 
        textNumber = 'two';
        break;
    case 3:
        textNumber = 'three';
        break;
    default:
        textNumber = 'unknown number' ;       
}

console.log(textNumber);