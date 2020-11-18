const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

//METODO GET /api/mi_diario
router.get('/mi_diario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM mi_diario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  //METODO POST 
router.post('/nueva-nota',(req,res)=>{

const {cons_diario, id_usuario, id_Caretips,Fecha_Actual, Nota_Diario} = req.body;

let nota = [cons_diario, id_usuario, id_Caretips,Fecha_Actual, Nota_Diario];

let nuevaNota = `INSERT INTO mi_diario (cons_diario, id_usuario, id_Caretips,Fecha_Actual, Nota_Diario)
                  VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevaNota, nota, (err,results, fields) => {
  if (err) {
    res.json({ status: 'error' + err.message, });
    return console.error(err.message);
  
  }
  res.json({ message:`Nota registrada`, })
  });
}); 

//METODO PUT 
router.put('/editar-nota/:cons_diario', (req, res) => {
  const {  id_usuario, id_Caretips,Fecha_Actual, Nota_Diario} = req.body;
  const { cons_diario } = req.params;
  mysqlConnection.query(`UPDATE mi_diario SET id_usuario = ?, id_Caretips =? , Fecha_Actual = ?, Nota_Diario = ?
  WHERE cons_diario = ?`,
    [ id_usuario, id_Caretips,Fecha_Actual, Nota_Diario,cons_diario], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Nota actualizada' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
      }
      })});
 
//METODO DELATE RECONOCER ID- BUSQUEDA
router.delete('/eliminar-nota/:cons_diario', (req, res) => {
  const { cons_diario } = req.params;
  mysqlConnection.query('DELETE FROM mi_diario WHERE cons_diario = ?',
  //ERROR, CAMPOS Y REGISTROS
   [cons_diario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Nota eliminada'});
    } else {
      res.json({ status: 'error' + err.message, });
      console.log(err);
    }
  });
});
module.exports = router; 