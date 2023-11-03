// Creating Class Person
class Person {
    static counterPersons = 0;
    
    constructor(name, lastname, age) {
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        this._idPerson = ++Person.counterPersons;
    }

    get idPerson() {
        return this._idPerson;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(lastname) {
        this._lastname = lastname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    toString() {
        return this._idPerson + ' - ' + this._name + ' ' + this._lastname + ', ' + this._age + ' years old';
    }
}


class Employee extends Person{
    static counterEmployee = 0;
    constructor(salary){
        this.idEmployee = ++counterEmployee;
        this.salary = salary
    }

    get idEmployee(){
        return this.idEmployee;
    }

    get salary(){
        return this.salary;
    }

    set salary(salary){
        this.salary = salary;
    }

    toString(){
        return super.toString() + ' - ' + this.idEmployee + ' $' + this.salary;
    }
}

class Client extends Person{
    static counterClient = 0;
    constructor(registerDate){
        idClient = ++counterClient;
        this.registerDate = registerDate;
    }

    get registerDate(){
        return this.registerDate;
    }

    set registerDate(registerDate){
        this.registerDate = registerDate;
    }

    toString(){
        return super.toString() + ' - ' + this.idClient + ' ,' + this.registerDate;
    }
}

let person1 = new Person('Jony','Badillo',21);
console.log(person1.toString());