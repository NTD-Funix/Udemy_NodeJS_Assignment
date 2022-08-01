const express = require('express');

const userData = require('./index');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const users = userData.users;
    res.render('users', {
        pageTitle: "Users",
        users: users,
        path: "/users",
        activeUsers: true,
        hasUsers: users.length > 0,
    })
});

module.exports = router;