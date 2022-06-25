// const express = require("express");
// const app = express ();
// const path =  require ("path");
// const mainRoute = require('./routes/mainRoute');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

// const PORT = 3000;
// app.listen(PORT, ()=>{
//     console.log('Server corriendo en port: ', PORT)
// })

// app.use(express.static(path.join(__dirname, '../public')))

// app.use(mainRoute);

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/home.html'));
})

app.get('/home', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/register.html'));
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/login.html'));
})

app.get('/products', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/products.html'));
})
app.get('/shop', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/shop.html'));
})
app.get('/aboutUs', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/aboutUs.html'));
})

app.post('/datos', (req,res)=>{
    res.send(req.body)
})

app.listen(3030, console.log('Servidor corriendo en el puerto 3030'));
