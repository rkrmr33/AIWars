const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: "hey"});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('[+] Listening at port:' + PORT.toString());