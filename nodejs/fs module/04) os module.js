// systemInfo.js
const os = require("os");

// 1️⃣ 🖥️ Print your system’s hostname
console.log("Hostname:", os.hostname());

// 2️⃣ 🏠 Show the path of your home directory
console.log("Home Directory:", os.homedir());

// 3️⃣ ⏳ Display how long your system has been running (uptime in hours)
console.log("Uptime (hours):", (os.uptime() / 3600).toFixed(2));

// 4️⃣ 💾 Print your system’s total memory and free memory (in GB)
console.log("Total Memory (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / (1024 ** 3)).toFixed(2));

// 5️⃣ 👤 Show details of the current user
console.log("User Info:", os.userInfo());
