class Product{
    static counterProducts = 0;
    constructor(name,price){
        this._name = name;
        this._price = price;
        this._idProduct = ++counterProducts;
    }

    get _idProduct() {
        return this._idProduct;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    toString(){
        this._idProduct + '.-' + this._name + ',$' + this._price
    }
}