const path = require("path");

// 1️⃣ Join paths
console.log("Joined path:", path.join("folder", "file.txt"));

// 2️⃣ Dirname
console.log("Dir name:", path.dirname("/Users/test/folder/file.txt"));

// 3️⃣ Basename
console.log("File name:", path.basename("/Users/test/folder/file.txt"));

// 4️⃣ Extension
console.log("Extension:", path.extname("file.txt"));

// 5️⃣ Absolute path
console.log("Absolute:", path.resolve("folder", "file.txt"));
