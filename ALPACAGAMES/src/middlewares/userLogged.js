const fs = require('fs');
const path = require('path');
const dataJson = fs.readFileSync(path.join(__dirname, '../data/users.json'));
const users = JSON.parse(dataJson);
const db = require("../database/models");

function userLogged(req, res, next){
    res.locals.isLogged = false;

    if(req.cookies.userEmail && !req.session.userAreLogged){
        db.User.findOne({
            raw: true,
            where: {
              email: req.cookies.userEmail,
            },
          }).then((user) => {
            if(user){
            req.session.userAreLogged = user
            }
          })
    
        }
    if(req.session && req.session.userAreLogged){
            res.locals.isLogged = true;
            res.locals.userAreLogged = req.session.userAreLogged;
            
          }
    

    next();
}
module.exports = userLogged;