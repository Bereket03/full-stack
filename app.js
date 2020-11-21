const express = require('express');
const app = express();
const handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view', './views/layouts') ;

app.use('/', (req, res, next) => {
  res.render('home');
});

module.exports = app;