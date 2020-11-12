const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bdpm1ozus836ihen5sru-mysql.services.clever-cloud.com',
  user: 'uaqngmnfq12nr77f',
  password: 'obsIgHkdD5Pe8xWYYEOU',
  database: 'bdpm1ozus836ihen5sru',
  multipleStatements: true
});


//Conexión bd si hay error retornar 
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});


module.exports = mysqlConnection;