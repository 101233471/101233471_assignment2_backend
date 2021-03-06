/*
 * Assignment 2 Backend
 * Nicole Tosello - 101233471
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://Nicole:Nic1974201@cluster0.3tmwe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();
const employeeRouter = require('./EmployeeRouter.js');

app.use(bodyParser.urlencoded({ extended: true } ));
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected database mongoDB Atlas Server");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting...', err);
  process.exit();
});

app.use('/', employeeRouter);
app.get('/', (req, res) => {
	res.send('<h1>Assignment 2 - Backend</h1>');
});
app.listen(8080, () => {
	console.log('Server listening on port 8080');
});