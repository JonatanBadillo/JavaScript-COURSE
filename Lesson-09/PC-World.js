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
       return 'Mouse: [idMouse: ' + this.idMouse + ' ,Input Type: ' + this.inputType + ' ,Brand: ' +  this.brand + ']';  
    }
}

class KeyBoard extends InputDevice{
    static counterKeyBoard = 0;
    constructor(inputType,brand,){
        super(inputType,brand);
        this._idKeyBoard = ++KeyBoard.counterKeyBoard;
    }

    get idKeyBoard(){
        return this._idKeyBoard;
    }

    toString(){
        return 'KeyBoard: [idKeyBoard: ' + this._idKeyBoard + ' ,Input Type: ' + this.inputType + ' ,Brand: ' +  this.brand + ']';  
     }
}

class Monitor{
    static counterMonitor = 0;
    constructor(brand,size){
        this._idMonitor = ++Monitor.counterMonitor;
        this._brand = brand;
        this._size = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get brand(){
        return this._brand;
    }

    set brand(brand){
        this._brand = brand;
    }

    get size(){
        return this._size;
    }

    set size(size){
        this._size = size;
    }

    toString(){
        return 'Monitor: [idMonitor: ' + this._idMonitor + ' ,Brand: ' + this._brand + ' ,Size: ' +  this._size + ']';    
    }
}

class Computer{
    static counterComputer = 0;
    constructor(name,monitor,mouse,keyboard){
        this._idComputer = ++Computer.counterComputer;
        this._name = name;
        this._monitor = monitor;
        this._mouse = mouse;
        this._keyBoard = keyboard;
    }

    toString(){
        return 'Computer ' + this._idComputer + ': ' + this._name + ' \n' +  this._monitor +  '\n' +  this._mouse + '\n' + this._keyBoard ;    
    }
}

class Order{
    static counterOrder = 0 ;
    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._computers = [];
    }

    get idOrder(){
        return this._idOrder;
    }

    addComputer(computer){
        this._computers.push(computer);
    }

    showOrder(){
        let computersOrder = '';
        for(let computer of this._computers){
            computersOrder += `\n${computer}`;
        }

        console.log(`Order: ${this._idOrder}, Computers: ${computersOrder}`);
    }

}

let m1 = new Mouse('usb','hp');
let m2 = new Mouse('bluetooth','toshiba');
console.log(m1.toString());
console.log(m2.toString());

let kb1 = new KeyBoard('type c','dell');
let kb2 = new KeyBoard('usb','MSI');
console.log(kb1.toString());
console.log(kb2.toString());


let monitor1 = new Monitor('LG','15');
let monitor2 = new Monitor('Toshiba','27');
console.log(monitor1.toString());
console.log(monitor2.toString());


let pc1 = new Computer('HP',monitor1,m1,kb1);
console.log(pc1.toString());

let pc2 = new Computer('DELL',monitor2,m2,kb2);
console.log(pc2.toString());

order1 = new Order();
order1.addComputer(pc1);
order1.addComputer(pc2);

order1.showOrder();