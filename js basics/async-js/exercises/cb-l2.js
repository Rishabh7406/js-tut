const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
];

function getAdultUsers(data, callback) {
    // your code here
}

getAdultUsers(users, result => {
    console.log(result);
    // expected: [{name: "Bob", age: 20}, {name: "David", age: 22}]
});





/*
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 }
];

function getAdultUsers(data, callback) {
  const adults = data.filter(user => user.age > 18);
  callback(adults);
}

getAdultUsers(users, result => {
  console.log(result);
  // expected: [{name: "Bob", age: 20}, {name: "David", age: 22}]
});


*/


/*
function printAns(result){
    console.log(result);
}

*/