const express = require('express');
const app = express();

app.use(express.static('public'));





let port = process.env.PORT || 52;

app.listen(port, function () {
    console.log('we are on', port)
})