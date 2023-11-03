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
        return super.toString() + ' - ' + this._idClient + ' ,' + this._registerDate;
    }
}
