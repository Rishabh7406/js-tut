function getProducts() {
    let success = true; // will reject
    let data = [
        { id: 1, name: "T-Shirt", price: 499 },
        { id: 2, name: "Sneakers", price: 2499 },
        { id: 3, name: "Cap", price: 299 }
    ];

    return new Promise((resolve, reject) => {
        if (success) {
            resolve(data);
        } else {
            reject({ err: "some error occurred", status: 400 });
        }
    });
}

// Proper handling
// getProducts().then((data) => console.log("Products:", data))
//     .catch((err) => console.log("Error:", err));


async function handlePromise() {
    let res = await getProducts();
    console.log("res", res);
}

handlePromise();