const posts = [
  { id: 1, title: "Hello World" },
  { id: 2, title: "JS is fun" },
  { id: 3, title: "Learn Async" }
];

const fetchTitles = new Promise((resolve, reject) => {
  // your code here
});

fetchTitles
  .then(titles => console.log(titles))
  .catch(err => console.error(err));
// expected: ["Hello World", "JS is fun", "Learn Async"]


/*
const posts = [
  { id: 1, title: "Hello World" },
  { id: 2, title: "JS is fun" },
  { id: 3, title: "Learn Async" }
];

const fetchTitles = new Promise((resolve, reject) => {
  setTimeout(() => {
    const titles = posts.map(post => post.title);
    resolve(titles);
  }, 1000);
});

fetchTitles
  .then(titles => console.log(titles))
  .catch(err => console.error(err));
// expected: ["Hello World", "JS is fun", "Learn Async"]

*/