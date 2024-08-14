const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is from Node app');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`app is running on ${PORT}`));

module.exports = app;
