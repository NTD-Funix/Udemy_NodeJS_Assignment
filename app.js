const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
// const expressHandlebars = require("express-handlebars");

const app = express();

// app.set('view engine', 'pug');
// app.set('views', 'views');

// app.engine('handlebars', expressHandlebars({layoutsDir: 'views/layouts', defaultLayout: 'main-layout'}));
// app.set('view engine', 'handlebars');
// app.set('views', 'views');

app.set('view engine', 'ejs');
app.set('views', 'views');

const userData = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(userData.routes);
app.use(usersRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: "Page Not Found",
        path: ''
    })
});

app.listen(3000);