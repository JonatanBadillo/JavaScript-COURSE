class InputDevice{
    constructor(inputType,brand){
        this._inputType = inputType;
        this._brand = brand;
    }

    get inputType(){
        return this._inputType
    }

    set inputType(inputType){
        this._inputType = inputType;
    }

    get brand(){
        return this._brand;
    }

    set brand(brand){
        this._brand = brand;
    }
}

class Mouse extends InputDevice{
    static counterMouse = 0;
    constructor(inputType,brand,){
        super(inputType,brand);
        this._idMouse = ++Mouse.counterMouse;
    }

    get idMouse(){
        return this._idMouse;
    }

    toString(){
       return 'Mouse: ' + this.idMouse + ' ,Input Type: ' + this.inputType + ' ,Brand: ' +  this.brand;  
    }
}