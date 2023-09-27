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