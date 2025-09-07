const riskyTask = new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
        if (success) resolve("It worked!");
        else reject("Something went wrong!");
    }, 3000);
});

riskyTask
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
