class Employee{
    constructor(name,salary){
        this._name = name;
        this._salary = salary;
    }

    obtainDetails(){
        return `Employee: Name:${this._name}, Salary: ${this._salary}`;
    }
}

class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this._department = department;
    }
}

let manager1 = new Manager('Juan',500,'Systems');
console.log(manager1);