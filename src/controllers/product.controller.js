const Product = require('../models/product.model');

const getProducts = async (req,reply) =>{
    const products = await Product.find();
    return products;
};

const getOneProduct = async(req, reply) =>{
    const product = await Product.findById(req.params.id);
    return reply.code(200).send(product);
}

const postProduct = async (req,reply) =>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    return reply.code(201).send(newProduct);
}

const deleteProduct = async (req,reply) =>{
    await Product.findByIdAndDelete(req.params.id);
    return reply.code(200).send({ok : "Eliminated"});
};

const updateProduct = async (req,reply) =>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body , {new: true})
        return reply.send(updatedProduct);
    }catch(err){
        return reply.code(401).send(err);
    }
}

module.exports = {
    getProducts,
    getOneProduct,
    postProduct,
    deleteProduct,
    updateProduct
}