function fakeApi(name, delay) {
    return new Promise(resolve =>
        setTimeout(() => resolve(name), delay)
    );
}

async function sequential() {
    console.time("sequential");
    const a = await fakeApi("A", 1000); // waits 1s
    const b = await fakeApi("B", 1000); // waits another 1s
    console.log(a, b);
    console.timeEnd("sequential"); // ~2000ms
}

sequential();


function parallel() {
    console.time("parallel");
    Promise.all([
        fakeApi("A", 1000),
        fakeApi("B", 1000)
    ]).then(([a, b]) => {
        console.log(a, b);
        console.timeEnd("parallel"); // ~1000ms
    });
}

parallel();
