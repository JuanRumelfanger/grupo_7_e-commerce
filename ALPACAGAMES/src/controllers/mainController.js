const path = require('path');
const mainController = {
  home: (req, res) => {
    fetch('http://localhost:3000/api/videogames')
    .then(respone => respone.json())
    .then((data)=>{
      res.render('index', {videoGames : data.data });
    })
  },
  register: (req, res) => {
    res.render('register');
  },
  //login: (req, res) => {
    //res.render('login');
  //},
};

module.exports = mainController;
