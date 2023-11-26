const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult, ExpressValidator } = require('express-validator');
const db = require('../database/models');
const { DATE } = require('sequelize');

const dataJson = fs.readFileSync(path.join(__dirname, '../data/users.json'));
const users = JSON.parse(dataJson);

function updateUserJSON() {
  const usersJSON = JSON.stringify(users, null, 4);
  fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON);
}

const usersController = {
  login: (req, res) => {
    res.render('login');
  },
  processLogin: (req, res) => {
    let userFound = users.find((user) => req.body.email == user.email);
    if (userFound) {
      let correctPassword = bcrypt.compareSync(
        req.body.password,
        userFound.password,
      );
      if (correctPassword) {
        delete userFound.password;
        req.session.userAreLogged = userFound;
        if (req.body.rememberMe) {
          res.cookie('userEmail', req.body.email, { maxAge: 1000 * 120 });
        }
        return res.redirect(301, '/');
      } /*
      return res.render('login', {
        errors: {
          email: {
            msg: "Las credenciales no son correctas"
          }
        }
      })
    }else{
    return res.render('login', {
       errors: 
        { email: 
          { msg: "Este email no existe en la base de datos" }
        } 
      })
    */
    }
    //console.log(req.session);
    //res.redirect('/')
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  },
  perfil: (req, res) => {
    res.render('perfilUser');
  },
  register: (req, res) => {
    res.render('register');
  },
  processRegister: (req, res) => {
    db.User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      display_name: req.body.displayName,
      email: req.body.email,
      password: req.body.password,
      date_of_birth: req.body.birthDate,
      country: req.body.country,
      avatar: req.body.avatar,
    });
    /*
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('register', { errors: errors.errors, old: req.body });
    } else {
      const imageFilename = req.file ? req.file.filename : null;
      const lastUserId = users[users.length - 1].id;
      const newUser = {
        id: lastUserId + 1,
        name: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        birthDate: req.body.birthDate,
        country: req.body.country,
        admin: false,
        avatar: req.file.filename
      };
      console.log('Funcionando');
      users.push(newUser);
      updateUserJSON();
      res.redirect('/');
    }*/
  },
};

module.exports = usersController;
