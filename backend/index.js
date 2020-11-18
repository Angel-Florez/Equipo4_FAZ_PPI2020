const express = require('express');
const app = express();


// Middlewares
app.use(express.json());

const mi_perfil = require('./routes/mi_perfil');
const mi_diario = require('./routes/mi_diario');
const como_me_siento = require('./routes/como_me_siento');
const caretips = require('./routes/caretips');
const arteterapia = require('./routes/arteterapia');

app.use('/api', mi_perfil );
app.use('/api', mi_diario);
app.use('/api', como_me_siento);
app.use('/api', caretips);
app.use('/api', arteterapia);

app.set('json spaces',2);

// Ajustes del servidor
app.set('port',4001);
//opcion1
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 


app.get('/', (req,res)=>{
  res.send('Backend psique')
});