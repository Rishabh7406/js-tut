const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Third-party middlewares
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => res.send('Third-party middleware example'));
app.listen(3000, () => console.log('Server running on 3000'));
