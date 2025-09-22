// path-demo.js
const path = require("path");

// 1️⃣ join
console.log("join:", path.join("folder", "sub", "file.txt"));

// 2️⃣ resolve
console.log("resolve:", path.resolve("folder", "file.txt"));

// 3️⃣ basename
console.log("basename:", path.basename("/home/user/file.txt"));

// 4️⃣ dirname
console.log("dirname:", path.dirname("/home/user/file.txt"));

// 5️⃣ extname
console.log("extname:", path.extname("file.txt"));

// 6️⃣ parse
console.log("parse:", path.parse("/home/user/file.txt"));

// 7️⃣ format
console.log("format:", path.format({
    dir: "/home/user",
    name: "file",
    ext: ".txt"
}));
