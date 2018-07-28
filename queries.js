var conexion = require('./connection');

function MetodosDB() {
   
    this.seleccionar = function(response) {
       conexion.obtener(function(er, qr) {
          qr.query('select * from inventario', function(error, result) {
             qr.release();
             if (error) {
                response.send({ status: 'Error' })
             } else {
                response.send(result);
             }
          })
       }) 
    }
 
    this.seleccionarId = function(id_pro, response) {
       conexion.obtener(function(er, qr) {
          qr.query('select * from inventario where id_pro=?',id_pro, function(error, result) {
             qr.release();
             if (error) {
                response.send({ status: 'Error'});
             } else {
                response.send(result);
             }
          })
       })
    }
 
    this.insertar = function(data, response) {
       conexion.obtener(function(er, qr){
          qr.query('insert into inventario set ?', data, function(error, result){
             qr.release();
             if (error) {
                response.send({ status: 'Error' });
             } else {
                response.send({ status: 'Ok' });
             }
          })
       })
    }
 
    this.actualizar = function(data, response) {
       conexion.obtener(function(er, qr) {
          qr.query('update inventario set ? where id_pro = ?', [data, data.id_pro], function(error, result){
             qr.release();
             if (error) {
                response.send({ status: 'Error' });
             } else {
                response.send({ status: 'Ok' });
             }
          })
       })
    }
 
    this.borrar = function(id_pro, response) {
       conexion.obtener(function(er, qr) {
          qr.query('delete from inventario where id_pro = ?', id_pro, function(error, result) {
             qr.release();
             if (error) {
                response.send({ status: 'Error' });
             } else {
                response.send({ status: 'Ok' });
             }
          })
       })
    }
 }
 
 module.exports = new MetodosDB();