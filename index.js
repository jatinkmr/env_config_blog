const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send(process.env.URL);
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
});
