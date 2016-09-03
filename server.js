var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    
    var ip = req.headers['x-forwarded-for'] || '';
    var lan = req.headers['accept-language'] || '';
    var software = req.headers['user-agent'] || '';
    var output = {};
    output.ip = ip;
    output.language = lan;
    output.software = software;
    res.end(JSON.stringify(output));
});


app.listen(port);