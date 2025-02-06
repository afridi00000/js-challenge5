// Task 1: Object Properties
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);
// Task 2: Object Methods
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};

order.displayOrder();
// Task 3: Array Manipulation
let cartItems = ["Shirt", "Shoes", "Hat"];
cartItems.push("Jacket"); // Add a new product
cartItems.pop(); // Remove the last item
cartItems.unshift("Socks"); // Add an item at the beginning
cartItems.shift(); // Remove the first item

console.log(cartItems);
// Task 4: Map Method
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9); // Apply 10% discount

console.log(discountedPrices);
// Task 5: Filter Method
const inventory = [5, 0, 12, 8, 0];
const availableItems = inventory.filter(quantity => quantity > 0); // Remove products with zero stock

console.log(availableItems);
// Task 6: Reduce Method
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((total, amount) => total + amount, 0); // Calculate total revenue

console.log(`Total Revenue: $${totalRevenue}`);
// Task 7: find() Method
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(customer => customer === "Charlie"); // Locate "Charlie"

console.log(foundCustomer);
// Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    const tax = amount * (taxRate / 100);
    console.log(`Tax: $${tax}`);
    return tax;
}

calculateTax(100, 10);