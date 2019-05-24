//Install Express Server
const express = require('express');
const path = require('path');

const app = express();

//Serve only static files from dist directory
app.use(express.static(__dirname + '/dist/kaleidoscope'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/kaleidoscope/index.html'));
});

app.listen(process.env.PORT || 8080);