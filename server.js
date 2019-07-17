const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;

const app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || port, function() {
  console.log('listening on port', port);
})