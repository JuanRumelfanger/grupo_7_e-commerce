const path = require('path');
const mainController = {
    home: (req, res) => {
        res.render('./users/index', {
            "title": "Alpaca Games",
            "css": "styles"
        });
    },
    register: (req, res) => {
        res.render('./users/register', {
            "title": "Registro",
            "css": "stylesRegister"
        });
    },
    login: (req, res) => {
        res.render('./users/login', {
            "title": "Login",
            "css": "stylesLogin"
        });
    },
    shop: (req, res) => {
        res.render('./products/shop', {
            "title": "Shop",
            "css": "stylesShop"
        });
    },
    productDetail: (req, res) => {
        res.render('./products/productDetail', {
            "title": "Producto",
            "css": "stylesDetails"
        });
    },
    crearProducto:  (req, res) => {
        res.render('./products/crearProducto',{
            "title": "Crear Producto",
            "css": "stylesProducts"
        });
    },
    editarProducto: (req, res) => {    
        res.render('./products/editarProducto', { 
            "title": "Editar Producto",
            "css": "stylesProducts"            
        });
    },
}

module.exports = mainController;