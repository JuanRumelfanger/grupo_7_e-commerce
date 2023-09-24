const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const users = {
  login: (req, res) => {
    res.render('login');
  },
};

module.exports = users;
