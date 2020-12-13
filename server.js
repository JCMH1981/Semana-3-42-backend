const controller = require('./controller/controller.js');
const express = require('express');
const db = require('./models');
const apiRouter = require('./routes/index');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) 
{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.get('/', function(req, res)
{
	console.log("Estructura base del proyecto backend");
	res.send("Estructura base del proyecto backend");
});

//const port = 3000;
app.listen(app.get('PORT'), () => 
{
	console.log(`Running on http://localhost:${app.get('PORT')}`);
});

module.exports = app;
