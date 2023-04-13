const express = require('express')
const app = express();
const router = require('./router/index.js');

app.use('/',router);

app.listen(7788, () => {
    console.log('server is running on http://localhost:7788');
})