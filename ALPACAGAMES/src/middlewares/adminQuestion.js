const express = require("express");
const path = require("path");
const db = require("../database/models");

function adminQuestion(req, res, next) {

 db.User.findOne({
    raw: true,
    where: {
      email: req.body.email,
    },
   
  })
    .then((user) => {
      console.log(user);
      let userLogin = user
      return userLogin;
  })
  .catch((error) => console.log(error));

  db.Role.findAll({
    raw:true,
  })
  .then((roles)=>{
    console.log(roles);
    db.User.findOne({
      raw: true,
      where: {
        email: req.body.email,
      },
     
    })
      .then((user) => {
        console.log(user);
        if (user.id  == roles.id) {
          console.log('Eres admin');
          if(!req.session){
            req.session = {}
          }
          req.session.isAdmin = true
          req.locals.isAdmin = req.session.isAdmin
        } else {
          console.log('No eres admin');
        }
    })
    .catch((error) => console.log(error));
  })



 

  next();
}

module.exports = adminQuestion;
