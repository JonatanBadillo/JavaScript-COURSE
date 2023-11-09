class Employee{
    constructor(name,salary){
        this._name = name;
        this._salary = salary;
    }

    obtainDetails(){
        return `Employee: Name:${this._name}, Salary: ${this._salary}`;
    }
}