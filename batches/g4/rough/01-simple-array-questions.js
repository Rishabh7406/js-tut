// Batch G4 - Session 1
// Simple Array Questions

// 1. Create an array of students with grades
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 88 }
];

// 2. Find average grade
let average = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average grade:", average);

// 3. Find students with grade above 80
let topStudents = students.filter(student => student.grade > 80);
console.log("Top students:", topStudents);
