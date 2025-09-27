function waitOneSecond() {
    return new Promise(resolve => {
        // your code here
    });
}

async function runTask() {
    // your code here
}

runTask();



/*

function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task completed!"), 1000);
  });
}

async function runTask() {
  const message = await waitOneSecond(); // wait for promise
  console.log(message);
}

runTask();


*/