let x = 10;
console.log(x.length);

// Constructor method of objects Person 
function Person(name,lastname,email){ // With the constructor you can create a lot of objects with the same properties
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    // Functions in the constructor method
    this.compleName = function(){
        return this.name +  ' ' + this.lastname
    }
}

let father = new Person('Juan','Perez','jperez@mail.com');
let mother = new Person('Laura','Ramirez','jramirez@mail.com');
console.log(mother);
console.log(father);
console.log(father.compleName());


// Creating Object
let person = {
    name: 'Jony',
    lastname: 'Badillo',
    email: 'jonatanbadillo@mail.com',
    age : 21, 
    language : 'es',
    // Get in Objects
    get lang(){
        return this.language.toLocaleUpperCase();
    },
    // Set in Objects
    set lang(lang){
        this.language = lang.toLocaleUpperCase();
    },
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
console.log(person.lang);
person.lang = 'en'; // Calling SET method

console.log(person);
console.log(person.language);



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



