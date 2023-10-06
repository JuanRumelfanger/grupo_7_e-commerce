const fs = require('fs');
const path = require('path');
const dataJson = fs.readFileSync(path.join(__dirname, '../data/users.json'));
const users = JSON.parse(dataJson);

function userLogged(req, res, next){
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail
    let userFoundCookie = users.find((user) => emailCookie == user.email);

    if(userFoundCookie){
        req.session.userAreLogged = userFoundCookie
    }

    if(req.session && req.session.userAreLogged){
        res.locals.isLogged = true;
        res.locals.userAreLogged = req.session.userAreLogged;
    }

    next();
}
module.exports = userLogged;