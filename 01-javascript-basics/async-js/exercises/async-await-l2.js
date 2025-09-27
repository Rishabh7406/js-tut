// Step 0: Data
const products = [
    { name: "Shirt", price: 80 },
    { name: "Shoes", price: 150 },
    { name: "Hat", price: 50 },
    { name: "Jacket", price: 200 }
];

// Step 1: Function to get expensive products (pass array as argument)
function getExpensiveProducts(items) {
    return new Promise((resolve, reject) => {
        // your code here
        let ans = items.filter(ele => ele.price >= 150)
        let success = false;
        if (success) {
            resolve(ans);
        }
        else {
            reject("some error occured")
        }
    });
}

// Step 2: Async function to display results (receive array as argument)
async function showExpensive(items) {
    // your code here
    try {
        let res = await getExpensiveProducts(items);
        console.log("res", res);
    }
    catch (err) {
        console.log("err:", err);
    }
    
}

// Step 3: Call the function with products
showExpensive(products);

// expected: [{name: "Shoes", price: 150}, {name: "Jacket", price: 200}]


/*
// Step 0: Data
const products = [
  { name: "Shirt", price: 80 },
  { name: "Shoes", price: 150 },
  { name: "Hat", price: 50 },
  { name: "Jacket", price: 200 }
];

// Step 1: Function to get expensive products
function getExpensiveProducts(items) {
  return new Promise(resolve => {
    setTimeout(() => {
      const expensive = items.filter(product => product.price > 100);
      resolve(expensive); // send result to whoever awaits
    }, 1000);
  });
}

// Step 2: Async function to display results
async function showExpensive(items) {
  const result = await getExpensiveProducts(items);
  console.log("Expensive products:");
  result.forEach(product => {
    console.log(product.name + " - $" + product.price);
  });
}

// Step 3: Call the function
showExpensive(products);


*/