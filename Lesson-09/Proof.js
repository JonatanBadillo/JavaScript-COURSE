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


class Employee extends Person {
    static counterEmployee = 0;
    constructor(name, lastname, age, salary) {
        super(name, lastname, age);
        this._idEmployee = ++Employee.counterEmployee;
        this._salary = salary;
    }

    get idEmployee() {
        return this._idEmployee;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    toString() {
        return super.toString() + ' - Employee:' + this._idEmployee + ' ,$' + this._salary;
    }
}


class Client extends Person {
    static counterClient = 0;
    constructor(name, lastname, age, registerDate) {
        super(name, lastname, age);
        this._idClient = ++Client.counterClient;
        this._registerDate = registerDate;
    }

    get registerDate() {
        return this._registerDate;
    }

    set registerDate(registerDate) {
        this._registerDate = registerDate;
    }

    toString() {
        return super.toString() + ' - Client:' + this._idClient + ' ,' + this._registerDate;
    }
}


let person1 = new Person('Jony','Badillo',21);
console.log(person1.toString());

let person2 = new Person('Juan','Perez',35);
console.log(person2.toString());

let employee1 = new Employee('Memo','Ochoa',37,5000);
console.log(employee1.toString());

let client1 = new Client('Leo','Messi',35, new Date());
console.log(client1.toString());