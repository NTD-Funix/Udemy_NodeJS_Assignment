const path = require('path');
const express = require("express");

const mainRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(usersRoutes);
app.use(mainRoutes);
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);