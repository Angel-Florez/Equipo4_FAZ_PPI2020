const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');


router.get('/arteterapia',(req,res)=>{
    mysqlConnection.query('SELECT * FROM arteterapia ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    //METODO POST 
router.post('/nueva-figura',(req,res)=>{

const {cons_arteterapia, id_caretips, Figura_mandala} = req.body;

let figura = [cons_arteterapia, id_caretips, Figura_mandala];

let nuevaFigura = `INSERT INTO arteterapia (cons_arteterapia, id_caretips, Figura_mandala)
                  VALUES(?,?,?)`;
mysqlConnection.query(nuevaFigura, figura, (err,results, fields) => {
  if (err) {
    res.json({ status: 'error' + err.message, });
    return console.error(err.message);
  }
  res.json({ message:`Figura registrada`, })
  });
}); 
//METODO PUT 
router.put('/editar-figura/:cons_arteterapia', (req, res) => {
  const { id_caretips, Figura_mandala } = req.body;
  const { cons_arteterapia } = req.params;
  mysqlConnection.query(`UPDATE arteterapia SET id_caretips = ?, Figura_mandala = ?
  WHERE cons_arteterapia = ?`,
    [cons_arteterapia, id_caretips, Figura_mandala], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Figura actualizada' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
        }
      })});

//METODO DELETE
router.delete('/eliminar-figura/:cons_arteterapia', (req, res) => {
  const { cons_arteterapia } = req.params;
  mysqlConnection.query('DELETE FROM arteterapia WHERE cons_arteterapia = ?',
 
   [cons_arteterapia], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Figura eliminada'});
    } else {
      res.json({ status: 'error' + err.message, });
      console.log(err);
    }
  });
});
module.exports = router; 