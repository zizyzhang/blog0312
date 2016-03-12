/**
 * Created by Zizy on 3/12/16.
 */

var express = require('express');

var app = express();


var comments=[{id:"1",name:"nai",comment:"hahaha"},{id:"2",name:"mark",comment:"lalalal"},{id:"3",name:"sun",comment:"expemal"}];
app.get('/', function (req, res) {
    //res.send('Hello World!');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(comments);
});


app.post('/',function(req,res){
    console.log(req.body);
    res.send(req.body);
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

