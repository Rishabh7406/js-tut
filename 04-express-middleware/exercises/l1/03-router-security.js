const express = require('express');
const app = express();
const postRouter = express.Router();

// Router-level security middleware
postRouter.use((req, res, next) => {
    if (req.headers['x-api-key'] === '1234') {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
});

postRouter.get('/', (req, res) => res.send('All Posts'));
postRouter.get('/:id', (req, res) => res.send(`Post ${req.params.id}`));

app.use('/posts', postRouter);
app.listen(3000, () => console.log('Server running on 3000'));
