function showMessage(callback) {
    // your code here
}

showMessage(() => {
    console.log("Hello after 2 seconds!");
});



/*
function showMessage(callback) {
  setTimeout(callback, 2000); // wait 2 seconds then call callback
}

showMessage(() => {
  console.log("Hello after 2 seconds!");
});


*/