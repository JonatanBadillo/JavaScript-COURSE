// WHILE
console.log('WHILE');
let counter = 0;
while(counter< 3){
    counter++;
    console.log(counter)
}

// DO WHILE
console.log('DO WHILE');
let counter2 = 0;
do{
    console.log(counter2+1);
    counter2++;
}while(counter2<3);


// FOR
console.log('FOR');

for(let i = 0; i<5 ; i++){
    console.log(i+1);
}
console.log('End of FOR CYCLE');

// BREAK
console.log('BREAK');

for(let i = 0; i<5 ; i++){
    if (i % 2 == 0){
        console.log(i+1);
        break;
    }
}
console.log('End of FOR CYCLE');

// LABELS
console.log('LABEL');
starting:
for(let i = 0; i<5 ; i++){
    if (i % 2 != 0){
        continue starting;
    }
    console.log(i);
}