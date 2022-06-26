const path = require ("path")



const controller = {
    home: (req,res)=> {
    res.render('home', {product: product}) 
    },
    register: (req,res) => {
        res.render('register')
    },
    login: (req,res) => {
        res.render('login');
    },
    products: (req,res)=>{
        res.render('products');
    },
    shop: (req,res)=>{
        res.render('shop');
    },
    aboutUs: (req,res)=>{
        res.render('aboutUs');
    },
    datos: (req,res)=>{
        res.send(req.body)}
}


const product = [
    {
        name : "COCAAAAAAAAAa"
        }
]

module.exports = controller 
