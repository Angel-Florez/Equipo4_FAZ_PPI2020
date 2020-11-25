const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');


router.get('/caretips',(req,res)=>{
    mysqlConnection.query('SELECT * FROM caretips ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

//METODO POST 
router.post('/nuevo-caretips',(req,res)=>{

const {id_caretips, estado, Recomendaciones} = req.body;

let caretips = [id_caretips, estado, Recomendaciones];

let nuevoCaretips = `INSERT INTO caretips (id_caretips, estado, Recomendaciones)
                  VALUES(?,?,?)`;
mysqlConnection.query(nuevoCaretips, caretips, (err,results, fields) => {
  if (err) {
    res.json({ status: 'error' + err.message, });
    return console.error(err.message);
  }
  res.json({ message:`Caretips registrado`, })
  });
}); 
//METODO PUT 
router.put('/editar-caretips/:id_caretips', (req, res) => {
  const { estado, Recomendaciones } = req.body;
  const { id_caretips } = req.params;
  mysqlConnection.query(`UPDATE caretips SET estado = ?, Recomendaciones = ?
  WHERE id_caretips = ?`,
    [id_caretips, estado, Recomendaciones], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Caretips actualizado' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
        }
      })});

//METODO DELETE
router.delete('/eliminar-caretips/:id_caretips', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM caretips WHERE id_caretips = ?',
 
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Caretips eliminado'});
    } else {
      res.json({ status: 'error' + err.message, });
      console.log(err);
    }
  });
});
module.exports = router; 