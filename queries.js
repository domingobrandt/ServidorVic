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

    this.seleccionarp = function(response) {
        conexion.obtener(function(er, qr) {
           qr.query('select * from proveedor', function(error, result) {
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
 
    this.seleccionarIdp = function(id_prov, response) {
        conexion.obtener(function(er, qr) {
           qr.query('select * from proveedor where id_prov=?',id_prov, function(error, result) {
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
 
    this.insertarp = function(data, response) {
        conexion.obtener(function(er, qr){
           qr.query('insert into proveedor set ?', data, function(error, result){
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

    this.actualizarp = function(data, response) {
        conexion.obtener(function(er, qr) {
           qr.query('update proveedor set ? where id_prov = ?', [data, data.id_prov], function(error, result){
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

    this.borrarp = function(id_prov, response) {
        conexion.obtener(function(er, qr) {
           qr.query('delete from proveedor where id_prov = ?', id_prov, function(error, result) {
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