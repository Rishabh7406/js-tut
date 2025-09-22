const fs = require('fs')
fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {   // error object if something went wrong
        console.error(err);
        return;
    }
    console.log(data);  // data contains file contents
});
const data = fs.readFileSync("file.txt", "utf-8");
console.log(data)



const fs = require("fs");

// 1️⃣ Read File
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File contents:", data);
});

// 2️⃣ Write File
fs.writeFile("file.txt", "Hello World", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
});

// 3️⃣ Append File
fs.appendFile("file.txt", "\nAppended text", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Text appended successfully");
});

// // 4️⃣ Delete File
// fs.unlink("file.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File deleted");
// });

// 5️⃣ Rename File
fs.rename("old.txt", "new.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File renamed");
});
