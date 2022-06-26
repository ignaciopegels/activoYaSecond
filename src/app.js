// const express = require("express");
// const app = express ();
// const path =  require ("path");
// const mainRoute = require('./routes/mainRoute');



// const PORT = 3000;
// app.listen(PORT, ()=>{
//     console.log('Server corriendo en port: ', PORT)
// })

// app.use(express.static(path.join(__dirname, '../public')))

// app.use(mainRoute);

const express = require('express');
const app = express();
const path = require('path');
const mainroute = require ("../src/routes/routes") 

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use (mainroute)


app.listen(3030, console.log('Servidor corriendo en el puerto 3030'));
