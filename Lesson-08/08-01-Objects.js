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

