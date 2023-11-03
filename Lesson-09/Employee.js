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