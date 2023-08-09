const express= require('express');
const app = express();
const PORT = 3030;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/carrito',(req,res)=>res.sendFile(path.join(__dirname,'views','carrito.html')));
app.get('/register',(req,res)=>res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/registerOk',(req,res)=>res.sendFile(path.join(__dirname,'views','registerOk.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/productDetail',(req,res)=>res.sendFile(path.join(__dirname,'views','productDetail.html')))
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname,'views','404.html')));


app.listen(PORT,() => console.log('Servidor corriendo en http://localhost:'+PORT));
