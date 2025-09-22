let users = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "amit", age: 13 },
    { id: 3, name: "alok", age: 18 }
]
console.log(users)
let jsonedUser = JSON.stringify(users);
let parsedUser = JSON.parse(jsonedUser)
console.log("json", jsonedUser)
console.log("typeof json", typeof jsonedUser)
console.log("typeof users", typeof parsedUser)