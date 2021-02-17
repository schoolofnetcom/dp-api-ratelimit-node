const express = require('express');

const api = require('./api');
const app = express();


app.use('/api', api);

app.listen(3000, () => console.log('Express has been started..'));