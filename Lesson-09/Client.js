class Client extends Person{
    static counterClient = 0;
    constructor(name, lastname, age, registerDate){
        super(name,lastname,age);
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