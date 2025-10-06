const express = require('express');
const app = express();
const postRouter = express.Router();

// Router-level middleware
postRouter.use((req, res, next) => {
    console.log('[Router] /posts route accessed');
    next();
});

postRouter.get('/', (req, res) => res.send('All Posts'));
postRouter.get('/:id', (req, res) => res.send(`Post ${req.params.id}`));

app.use('/posts', postRouter);
app.listen(3000, () => console.log('Server running on 3000'));
