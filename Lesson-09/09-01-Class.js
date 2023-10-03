// It is not possible to create an object before declaring a class
// Does not apply hoisting

class Person{
    constructor(name , lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastname(){
        return this._lastname
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    completeName(){
        return this._name + ' ' + this._lastname;
    }

    toString(){
        // polymorphism
        // the method that will be executed will depend on the reference of the object(father type or son type)
        return this.completeName();
    }
}


// Inheritance
class Employee extends Person{
    constructor(name,lastname,area){
        super(name,lastname);
        this._area = area;
    }

    get area(){
        return this._area;
    }

    set area(area){
        this._area = area;
    }

    // Overwriting
    completeName(){
        return this._name + ' ' + this._lastname + ', ' + this._area;
    }
}

// Creating the object
let person1 = new Person('Jony','Badillo');
//person1.name = 'Jony';
//person1.lastname = 'Badillo';
console.log(person1);
person1.name = 'Jonatan Enrique'; // set name('Jonatan Enrique')
console.log(person1.name);// get name()
console.log(person1.toString());

let person2 = new Person('Memo','Ochoa');
console.log(person2);

// Inheritance
let employee1 = new Employee('Leo','Messi','Athlete');
console.log(employee1);
console.log(employee1.completeName() ); // Inheritance of the method
console.log(employee1.toString());