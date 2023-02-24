const Product = require('../models/product.model');
const { getProducts, getOneProduct, postProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');

const routes = [
    {
        url : '/products',
        method : 'GET',
        handler : getProducts
    },
    {
        url : '/products/:id',
        method : 'GET',
        handler : getOneProduct
    },
    {
        url : '/products',
        method : 'POST',
        handler: postProduct
    },
    {
        url : '/products/:id',
        method : 'DELETE',
        handler : deleteProduct
    },
    {
        url : '/products/:id',
        method : 'PUT',
        handler : updateProduct
    },
]

module.exports = routes;