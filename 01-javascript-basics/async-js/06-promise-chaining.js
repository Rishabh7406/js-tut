getProducts()
    .then((data) => {
        console.log("Step 1: Products received", data);
        // maybe transform data
        return data.map(p => p.price); // next step
    })
    .then((prices) => {
        console.log("Step 2: Extracted prices", prices);
        return prices.reduce((a, b) => a + b, 0); // next step
    })
    .then((total) => {
        console.log("Step 3: Total price", total);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
