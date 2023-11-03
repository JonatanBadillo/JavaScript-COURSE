class Employee extends Person{
    constructor(idPerson,name,lastname,age,idEmployee,salary){
        super(idPerson,name,lastname,age);
        this.idEmployee = idEmployee;
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