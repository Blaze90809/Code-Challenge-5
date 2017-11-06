var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = require('./public/routes/message.router.js');
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/add', messages);

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connection.on('connected', function(){
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed!');
})

mongoose.connect(databaseUrl);

app.listen(port, function(){
    console.log('listening on port:', port)
})
