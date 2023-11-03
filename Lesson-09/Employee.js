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
        return super.toString() + ' - ' + this._idEmployee + ' $' + this._salary;
    }
}
