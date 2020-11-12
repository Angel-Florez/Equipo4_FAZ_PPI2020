const express = require ('express');
const app= express ();


//Middlewares
app.use(express.json());

const routes = require('./routes/routes');
//Ruta- prefijo /api buena practica 
app.use ('/api',routes);

app.set('json spaces',2);

//Ajustes del servidor
app.set('port',3000);

//opcion mostrar un mensaje en la consola 
app.listen(app.get ("port"), () => {
console.log ('Servidor corriendo en el puerto 3000');
});


app.get ('/', (req,res)=>{
res.send('psique')
});