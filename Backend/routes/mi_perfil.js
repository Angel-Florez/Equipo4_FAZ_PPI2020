const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

//METODO GET /api/usuarios
router.get('/usuarios', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM mi_perfil ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  //METODO POST 
router.post('/nuevo-usuario',(req,res)=>{

const {Id_Usuario, correo,nombre_usuario,genero,fecha_nacimiento,contrasena} = req.body;

let usuario = [Id_Usuario, correo,nombre_usuario,genero,fecha_nacimiento,contrasena];

let nuevoUsuario = `INSERT INTO mi_perfil (Id_Usuario, correo,nombre_usuario,genero,fecha_nacimiento,contrasena)
                  VALUES(?,?,?,?,?,?)`;
mysqlConnection.query(nuevoUsuario, usuario, (err,results, fields) => {
  if (err) {
    res.json({ status: 'error' + err.message, });
    return console.error(err.message);
  }
  res.json({ message:`Usuario registrado`, })
  });
}); 

//METODO PUT
router.put('/actualizar-usuario/:Id_Usuario', (req, res) => {
  const { correo,nombre_usuario,genero,fecha_nacimiento,contrasena} = req.body;
  const { Id_Usuario } = req.params;
  mysqlConnection.query(`UPDATE mi_perfil SET correo = ?,nombre_usuario = ?, genero = ?,fecha_nacimiento = ?,contrasena = ? WHERE Id_Usuario = ?`, 
  [ correo,nombre_usuario,genero,fecha_nacimiento,contrasena,Id_Usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      res.json({ status: 'error' + err.message, });
      console.log(err);
    }
  });
});

//METODO DELETE RECONOCER ID- BUSQUEDA
router.delete('/eliminar-usuario/:Id_Usuario', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM mi_perfil WHERE Id_Usuario = ?',
  //ERROR, CAMPOS Y REGISTROS
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario eliminado!'});
    } else {
res.json({ status: 'error' + err.message, });  
      console.log(err);
    }
  });
});







module.exports = router; 