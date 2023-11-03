// Creating Class Person
class Person{
    // creating the static attribute
    static counterPersons = 0;
    // creating constructor
    constructor(name, lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.idPerson = ++counterPersons;
    }

    // GET AND SET
    get idPerson(){
        return this.idPerson;
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

    get age(){
        return this.age;
    }

    set age(age){
        this.age = age;
    }

    toString(){
        return this.idPerson + ' - ' + this._name + ' ' + this._lastname + ', ' + this.age + ' years old';
    }
}

