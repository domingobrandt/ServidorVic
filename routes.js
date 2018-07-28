var db = require('./queries');

function http() {
    this.configurar = function(app) {
       
       app.get('/inventario/', function(solicitud, response) {
          db.seleccionar(response);
       })
 
       app.get('/inventario/:id_pro/', function(solicitud, response) {
          db.seleccionarId(solicitud.params.id_pro, response);
       })
 
       app.post('/inventario/', function(solicitud, response) {
          db.insertar(solicitud.body, response);
       })
 
       app.put('/inventario/', function(solicitud, response) {
          db.actualizar(solicitud.body, response);
       })
 
       app.delete('/inventario/:id_pro/', function(solicitud, response) {
          db.borrar(solicitud.params.id_pro, response);
       })
    }  
 }
 
 module.exports = new http();