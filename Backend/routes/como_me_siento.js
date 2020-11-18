const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

//METODO GET /api/como_me_siento
router.get('/como_me_siento', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM como_me_siento ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  
//METODO POST 
router.post('/nueva-emocion',(req,res)=>{

const {cons_diario, Descripción, Recomendaciones } = req.body;

let emocion = [cons_diario, Descripción, Recomendaciones];

let nuevaEmocion = `INSERT INTO como_me_siento (cons_diario, Descripción, Recomendaciones)
                  VALUES(?,?,?)`;
mysqlConnection.query(nuevaEmocion, emocion, (err,results, fields) => {
  if (err) {
    res.json({ status: 'error' + err.message, });
    return console.error(err.message);
  }
  res.json({ message:`Emocion registrada`, })
  });
}); 
//METODO PUT 
router.put('/editar-emocion/:cons_diario', (req, res) => {
  const { Descripción, Recomendaciones } = req.body;
  const { cons_diario } = req.params;
  mysqlConnection.query(`UPDATE como_me_siento SET  Descripción = ?, Recomendaciones = ?
  WHERE cons_diario = ?`,
    [cons_diario,Descripción, Recomendaciones], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Emocion actualizada' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
        }
      })});

//METODO DELETE
router.delete('/eliminar-emocion/:cons_diario', (req, res) => {
  const {cons_diario } = req.params;
  mysqlConnection.query('DELETE FROM como_me_siento WHERE cons_diario = ?',
 
   [cons_diario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Emoción eliminada'});
    } else {
      res.json({ status: 'error' + err.message, });
      console.log(err);
    }
  });
});
module.exports = router; 