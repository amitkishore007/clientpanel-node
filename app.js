const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const app  = express();


mongoose.connect('mongodb://localhost/client_panel', { useNewUrlParser:true });

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
routes(app);
app.use((errors, req, res, next) => {
    res.status(422).send(errors.message);
    next();
});


module.exports = app;