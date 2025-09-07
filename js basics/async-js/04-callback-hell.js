function step1(data, next) {
    console.log("Step 1 started with", data);
    next(data + 1);
}

function step2(data, next) {
    console.log("Step 2 started with", data);
    next(data + 1);
}

function step3(data, next) {
    console.log("Step 3 started with", data);
    console.log("Final result:", data + 1);
}


// Running the steps
function runSteps() {
    step1(0, function afterStep1(result1) {
        step2(result1, function afterStep2(result2) {
            step3(result2, function afterStep3(result3) {
                // already logged in step3
            });
        });
    });
}

runSteps();
