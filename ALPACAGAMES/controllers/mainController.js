const path = require('path');
const producto = require ('producto')
const mainController = {
    home: (req, res) => {
        res.render('index')
        //res.sendFile(path.join(__dirname, '../views/users/index.html'));
    },
    register: (req, res) => {
        res.render('register')
        //res.sendFile(path.resolve(__dirname, '../views/users/register.html'));;
    },
    login: (req, res) => {
        res.render('login')
        //res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
    },
    shop: (req, res) => {
        //res.sendFile(path.resolve(__dirname, '../views/products/shop.html'));
    },
    productDetail: (req, res) => {
        const id = req.params.id

        const foundGame = producto.find(()=>{
            return game.id == id;
        })
        
        res.render('productDetail')
        //res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
    },
}

module.exports = mainController;