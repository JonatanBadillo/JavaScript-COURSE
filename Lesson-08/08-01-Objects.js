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
    },

    // Get in Objects
    get fullName(){
        return this.name + ' ' +this.lastname;
    }
}

console.log(person.fullName);

person.name = 'Jonatan'
console.log(person);

console.log(person.completeName());


//  Another manner of creating an Object
let person2 = new Object();
person2.name = 'Guillermo';
person2.lastname = 'Ochoa';
person2.number = '55443322';
console.log(person2)

// Add or Eliminate Properties in a Object
// Adding 
person.tel = '44332211';
console.log(person);
// Deleting
delete person.tel;
console.log(person);

// Manners of printing an Object
console.log(person.name + ', ' + person.lastname)

// for in
for(namePropertie in person){
    console.log(person[namePropertie])
}

let personArray = Object.values(person);
console.log(personArray);



