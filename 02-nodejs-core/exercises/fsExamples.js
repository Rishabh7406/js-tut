const fs = require("fs");

// 1️⃣ Read file
// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File contents:", data);
// });

// 2️⃣ Create file
// fs.writeFile("hello.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File created");
// });

// 3️⃣ Append file
// fs.appendFile("hello.txt", "\nWelcome to Node.js", (err) => {
//   if (err) throw err;
//   console.log("Text appended");
// });

// 4️⃣ Rename file
fs.rename("old.txt", "new.txt", (err) => {
    if (err) throw err;
    console.log("File renamed");
});

// 5️⃣ Delete file
fs.unlink("new.txt", (err) => {
    if (err) throw err;
    console.log("File deleted");
});
