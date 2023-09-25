const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

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
  processLogin: (req, res) => {},
  register: (req, res) => {
    res.render('register');
  },
  processRegister: (req, res) => {
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
        avatar: imageFilename,
      };
      users.push(newUser);
      updateUserJSON();
      res.redirect('/users/login');
    }
  },
};

module.exports = usersController;
