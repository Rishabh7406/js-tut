const users = [
    {name1: "alice", age:17},
    {name2: "alex", age:20},
    {name3: "david", age:12},
    {name4: "charli", age:19}
]
function getAdultUsers(data,callback){
    let ans = data.filter((ele) => ele.age>18);
    callback(ans);
}
function handleCallback(result){
    console.log(result);
}
getAdultUsers(users, handleCallback);
