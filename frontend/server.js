const express = require('express')
const fs = require('fs');

const app = express();
const port = 8080;
console.log('run on ' + port);

app.use(express.static('dist'))

app.get('/*', function(req, res) {
    fs.readFile('dist/index.html', 'utf8', (err, data) => {
        res.send(data);
    })
});

app.listen(port)
