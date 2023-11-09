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

    // OverWrite
    obtainDetails(){
        return `Manager: ${super.obtainDetails()} ,Department:${this._department}`;
    }
}



let e1 = new Employee('Paco',200);
console.log(e1.obtainDetails());

let manager1 = new Manager('Juan',500,'Systems');
console.log(manager1.obtainDetails());

// Polymorphism
function print(x){
    console.log(x.obtainDetails());
    // instance of
    if(x instanceof Manager){
        console.log('The object is Manager type');
    }
    else if(x instanceof Employee){
        console.log('The object is Employee type');
    }
    else if(x instanceof Object){
        console.log('It is Object type');
    }
}
print(e1);
print(manager1);