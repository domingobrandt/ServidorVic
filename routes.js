var db = require('./queries');

function http() {
    this.configurar = function(app) {

        // select inventario 
        app.get('/inventario/', function(solicitud, response) {
        db.seleccionar(response);
        })

        // select proveedor 
        app.get('/proveedor/', function(solicitud, response) {
        db.seleccionarp(response);
        })

       //id inventario
       app.get('/inventario/:id_pro/', function(solicitud, response) {
        db.seleccionarId(solicitud.params.id_pro, response);
       })

       //id proveedor
       app.get('/proveedor/:id_prov/', function(solicitud, response) {
        db.seleccionarIdp(solicitud.params.id_prov, response);
        })

        //Insert Invertory
        app.post('/inventario/', function(solicitud, response) {
        db.insertar(solicitud.body, response);
         })

        //Insert proveedor
        app.post('/proveedor/', function(solicitud, response) {
        db.insertarp(solicitud.body, response);
        })


        //Modificar Invetario 
        app.put('/inventario/', function(solicitud, response) {
        db.actualizar(solicitud.body, response);
        })

        //Modificar proveedor 
        app.put('/proveedor/', function(solicitud, response) {
        db.actualizarp(solicitud.body, response);
        })

       //Borrar Inventario 
       app.delete('/inventario/:id_pro/', function(solicitud, response) {
          db.borrar(solicitud.params.id_pro, response);
       })

        //Borrar proveedor 
        app.delete('/proveedor/:id_prov/', function(solicitud, response) {
        db.borrarp(solicitud.params.id_prov, response);
        })
    }  
 }
 
 module.exports = new http();