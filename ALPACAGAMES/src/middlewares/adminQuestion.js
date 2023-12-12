const express = require("express");
const path = require("path");
const db = require("../database/models");

function adminQuestion(req, res, next) {


  db.User.findOne({
    raw: true,
    where: {
      email: req.body.email,
    },
    include: [{association : 'roles'}]
  })
    .then((user) => {
    })
    .catch((error) => console.log(error));

  next();
}

module.exports = adminQuestion;
