let x = 10;
console.log(x.length);

let person = {
    name: 'Jony',
    lastname: 'Badillo',
    email: 'jonatanbadillo@mail.com',
    age : 21, 
    // Adding methods to the objects
    completeName: function(){
        return this.name + ' ' +this.lastname;
    }
}

person.name = 'Jonatan'
console.log(person);

console.log(person.completeName());


//  Another manner of creating an Object
let person2 = new Object();
person2.name = 'Guillermo';
person2.lastname = 'Ochoa';
person2.number = 55443322;
console.log(person2)

