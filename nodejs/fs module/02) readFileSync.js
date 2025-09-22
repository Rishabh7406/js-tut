const fs = require('fs');

const data = fs.writeFileSync('file.txt', "something from the code"); // waits here

fs.appendFileSync('file.txt', "appended data from the code"); // waits here

// console.log(data); // runs after reading is done
// console.log('Next line'); // runs after above
// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File contents:", data);
// });
