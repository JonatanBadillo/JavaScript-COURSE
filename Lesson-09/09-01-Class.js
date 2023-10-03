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
}


// Creating the object
let person1 = new Person('Jony','Badillo');
//person1.name = 'Jony';
//person1.lastname = 'Badillo';
console.log(person1);
person1.name = 'Jonatan Enrique'; // set name('Jonatan Enrique')
console.log(person1.name);// get name()

let person2 = new Person('Memo','Ochoa');
console.log(person2);