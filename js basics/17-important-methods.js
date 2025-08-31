let nums = [1, 2, 3, 4, 5];
console.log(nums.find(x => x > 3)); // 4
console.log(nums.some(x => x > 4)); // true
console.log(nums.every(x => x > 0)); // true
console.log(nums.map(x => x * 2));
console.log(nums.filter(x => x % 2 === 0));
console.log(nums.reduce((a, b) => a + b, 0));
