// Batch G3 - Session 1
// Simple Array Questions

// 1. Create an array of products with prices
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Headphones", price: 3000 }
];

// 2. Find total value of all products
let totalValue = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total value:", totalValue);

// 3. Find products under 25000
let affordable = products.filter(product => product.price < 25000);
console.log("Affordable products:", affordable);
