class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        console.log(`Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`);
    }
    updateStock(quantity) {
        this.stock -= quantity;
        return quantity
    }
};
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());

//Task 2: Creating an Order Class
class Order {
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product
        this.quantity = quantity
        this.product.updateStock(quantity)
    }
    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

//Task 3: Creating an Inventory Class
class Inventory {
    constructor(products) {
    this.products = [];
    this.Orders = [];
}
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        this.products.forEach(prod => console.log(prod.addProduct()));
    }
        placeOrder(orderID, product, quantity) {
            if (stock >= 0, order =+);
        }
    }
    listOrders() {
        console.log(`Order ID: ${this.orderID}, Product ${this.Product}, Quantity: ${this.Quantity}, Total Price $${this.Price * this.Quantity}`);
    }
}
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

//Task 4: Implementing Order Management
//See above Changes
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());