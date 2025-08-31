function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}
fetchData(msg => console.log(msg));
