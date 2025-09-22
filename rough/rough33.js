let pro = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("promise resolved");
    }
    else {
        reject("promise rejected")
    }
})

pro.then((res) => console.log(res)).catch((err) => console.log(err))
