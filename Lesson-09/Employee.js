class Employee extends Person{
    static counterEmployee = 0;
    constructor(idPerson,name,lastname,age,salary){
        super(idPerson,name,lastname,age);
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
}