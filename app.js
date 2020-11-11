//App.js
const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const commentsRoutes = require('./routes/comments');
const app = express();

// Parse requests type application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// Parse requests type application/json
app.use(express.json());

//Set views path
app.set('views', path.join(__dirname, 'views'));
//Set pug as view engine
app.set('view engine', 'pug');

//Basic routes
app.use('/', indexRoutes);
//Comments routes
app.use('/comments', commentsRoutes);

//Define public folder as static
app.use(express.static('public'));

module.exports = app;