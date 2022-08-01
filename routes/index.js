const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: "Home Page",
        path: "/",
        formsCSS: true,
        activeHome: true
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({
        username: req.body.username,
        password: req.body.password
    });
    res.redirect('/users')
});

exports.routes = router;
exports.users = users;