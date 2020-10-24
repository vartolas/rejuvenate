const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
});

//here we can make get requests to our api from databases
//we would use something like
//app.get(<api endpoint>, (req, res) => { handle response here });

app.listen(PORT, () => {
    console.log(`server listeing at http://localhost:${PORT}...`);
})