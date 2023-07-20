/* initialization of the necessary modules */
const express = require('express');
const app = express();
const server = app.listen(4747, () => {
    console.log("Listening on port 4747");
})

app.get('/', (req, res) => {
    res.send('Yooww!!!');
    // res.end();
})