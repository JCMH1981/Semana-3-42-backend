const controller = require('./controller/controller.js');
const express = require('express');
const db = require('./models');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(function(req, res, next) 
{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
app.get('/api/users', (req, res) => {
 db.user.findAll().then(users => res.json(users))
});

app.post('/api/auth/signin', controller.signin);

app.get('/', function(req, res) {
 db.user.findAll().then(users => res.json(users))
});

const port = 3000
app.listen(port, () => {
 console.log(`Running on http://localhost:${port}`)
})

module.exports = app;

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
 next();
});

app.post('/api/auth/signin', controller.signin);
