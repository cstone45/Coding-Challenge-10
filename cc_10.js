class Product { //Creates the Product Class and lists its properties
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() { //Creates the template literal which will list the Product Details in the console
        console.log(`Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`);
    }
    updateStock(quantity) { //Creates a method to update the stock of the product when products are sold 
        this.stock -= quantity;
        return quantity
    }
};
const prod1 = new Product("Laptop", 101, 1200, 10); //Establishes the information about the product and logs it to the console
console.log(prod1.getDetails()); //Creates the initial order details in the console
prod1.updateStock(3); //Reduces the Stock
console.log(prod1.getDetails()); //Lists the new Product Details to the console after the reduction in stock

//Task 2: Creating an Order Class
class Order { //Creates the Order class and establishes its properties
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product
        this.quantity = quantity
        this.product.updateStock(quantity)
    }
    getOrderDetails() { //Creates the template literal which will list the order and its components in the console
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`
    }
}
const order1 = new Order(501, prod1, 2); //Creates the order and establishes its parameters
console.log(order1.getOrderDetails()); //Logs the Initial order Details to the console
console.log(prod1.getDetails()); //Logs the new Product Details with reduced stock

//Task 3: Creating an Inventory Class
class Inventory { //Creates the Inventory Class and creates its properties
    constructor(products) {
    this.products = [];
    this.Orders = [];
}
    addProduct(product) { //Adds a new product to the inventory
        this.products.push(product);
    }
    listProducts() { //Creates a method to log the product details to the console
        this.products.forEach(prod => console.log(prod.addProduct()));
    }
        placeOrder(orderID, product, quantity) { //Creates a method to place orders if stock is avalible
            if (stock >= 0, order =+);
        }
    listOrders() { //Creates the template literal to format and list the order in the console
        console.log(`Order ID: ${this.orderID}, Product ${this.Product}, Quantity: ${this.Quantity}, Total Price $${this.Price * this.Quantity}`);
    }
    restockProduct(productID, quantity) { //Creates a function to restock the product
        quantity +=
    }
}
const inventory = new Inventory(); //Creates a new inventory log in the console
inventory.addProduct(prod1); //Adds Product 1 to tthe inventory
inventory.listProducts(); //Logs all product details to the console

//Task 4: Implementing Order Management
//See above Changes
inventory.placeOrder(601, prod1, 2); //Places an Order and Logs it to the console
inventory.listOrders(); //Adds Orders to the console 
console.log(prod1.getDetails()); //Gets Details for Product 1 after an order is placed

//Task 5: Implementing Product Restocking
//See Above Changes
inventory.restockProduct(101, 5); //Restocks Product 1 by 5 Units
console.log(prod1.getDetails()); //Logged Product 1 Details after Restock