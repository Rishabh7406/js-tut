// Fake async API calls
function fetchUser() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("👤 User data"), 1000)
    );
}

function fetchPosts() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("📝 Posts data"), 2000)
    );
}

function fetchComments() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("💬 Comments data"), 1500)
    );
}

// Sequential: one after another
async function sequentialDemo() {
    console.time("Sequential");
    const user = await fetchUser();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    console.log("Sequential result:", user, posts, comments);
    console.timeEnd("Sequential");
}

// Parallel: all together
async function parallelDemo() {
    console.time("Parallel");
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments(),
    ]);
    console.log("Parallel result:", user, posts, comments);
    console.timeEnd("Parallel");
}

// Run both
(async () => {
    await sequentialDemo();
    await parallelDemo();
})();
