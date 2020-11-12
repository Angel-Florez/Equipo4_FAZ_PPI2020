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

const {correo,nombre_usuario,genero,fecha_nacimiento,contrasena} = req.body;

let usuario = [correo,nombre_usuario,genero,fecha_nacimiento,contrasena];

let nuevoUsuario = `INSERT INTO nuevo-usuario(correo,nombre_usuario,genero,fecha_nacimiento,contrasena)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoUsuario, usuario, (err,results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Usuario registrado`, })
  });
}); 

//METODO PUT
router.put('/actualizar-usuario/:id', (req, res) => {
  const {correo,nombre_usuario,genero,fecha_nacimiento,contrasena} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE usuario SET correo = ?,nombre_usuario = ?,
  genero = ?,documento = ?,fecha_nacimiento = ?,
  contrasena = ? WHERE id = ?`, 
  [correo,nombre_usuario,genero,fecha_nacimiento,contrasena, id_usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});

//METODO DELATE RECONOCER ID- BUSQUEDA
router.delete('/eliminar-usuario/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM eliminar-usuario WHERE id = ?',
  //ERROR, CAMPOS Y REGISTROS
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario eliminado!'});
    } else {
      console.log(err);
    }
  });
});







module.exports = router; 