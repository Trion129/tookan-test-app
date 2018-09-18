const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true,
})); 

const accountSid = 'AC447f39f6f524a66f99dda4979bd64943';
const authToken = 'd8f08c7f54488a7f45d930cca656e899';
const client = require('twilio')(accountSid, authToken);

app.post('/sms', (req, res) => {
    console.log(req.body);
    client.messages.create({
        body: 'twilio'+req.body.content,
        from: '+17062227746',
        to: '+919417763589'
    }).then(_ => {
        res.end('Done');
    }).catch(err => console.log);
});

const listener = app.listen(process.env.PORT || 8080, function(){
    console.log(`Listening at : ${process.env.PORT || 8080}`);
});
