class Product{
    static counterProducts = 0;
    constructor(name,price){
        this._name = name;
        this._price = price;
        this._idProduct = ++Product.counterProducts;
    }

    get idProduct() {
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
        return this._idProduct + '.- ' + this._name + ',$' + this._price
    }
}

class Order{
    static counterOrders = 0;
    static get MAX_PRODUCTS(){
        return 5;
    }
    constructor(){
        this._idOrder = ++Order.counterOrders; 
        this._products = [];
        this._counterAddedProducts = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
        }else{
            console.log('Not possible to add more products');
        }
    }
}

let product1 = new Product('Jeans' , 200);
let product2 = new Product('T shirt', 150);

console.log(product1.toString());