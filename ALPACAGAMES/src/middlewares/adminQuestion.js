const express = require('express');
const path = require("path");
const db = require("../database/models");

function adminQuestion(req, res, next) {
    
    let email = req.body.email
    
    db.User.findOne({
        raw:true,
        where:{
            email:req.body.email
        },
        include:[{ model:db.Role, as: 'roles' }   ]
    }).then((user)=>{
        console.log(user.roles.id);
       
    })
    .catch(error => console.log(error))

    next()
}


module.exports = adminQuestion