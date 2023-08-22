const path = require('path');

const mainController = {
    home: (req, res) => {
        res.render('index', {
            "title": "Alpaca Games",
            "css": "styles"
        });
    },
    register: (req, res) => {
        res.render('register', {
            "title": "Registro",
            "css": "stylesRegister"
        });
    },
    login: (req, res) => {
        res.render('login', {
            "title": "Login",
            "css": "stylesLogin"
        });
    },
    shop: (req, res) => {
        res.render('shop', {
            "title": "Shop",
            "css": "stylesShop"
        });
    },
    productDetail: (req, res) => {
        res.render('productDetail', {
            "title": "Producto",
            "css": "stylesDetails"
        });
    },
}

module.exports = mainController;