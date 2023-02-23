const express = require("express");
const morgan = require("morgan");
const routes = require('./routes/index');


const server = express();
server.name = 'API';


//Middlewares:

//transforma .json a objetos js y permite obtener la información de las requests desde req.body, req.params y req.query:
//los límites se establecen para evitar que el servidor sea inundado con solicitudes entrantes demasiado grandes, lo que puede afectar el rendimiento.
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
//requistra solicitudes HTTP y las muestra en la consola:
server.use(morgan('dev'));



server.use((req, res, next) => {
    //establece la URL desde la cual se permiten solicitudes:
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // actualice para que coincida con el dominio desde el que realizará la solicitud
    //permite solicitudes desde cualquier origen:
    res.header('Access-Control-Allow-Origin', '*'); 
    //establece que se permiten credenciales, como cookies, en las solicitudes:
    res.header('Access-Control-Allow-Credentials', 'true');
    //establecen los métodos HTTP permitidos y los tipos de contenido que se pueden enviar:
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  


server.use('/', routes);


// Cualquier error dentro del servidor, el manejador lo termina pasando con next() hasta que llega a este middleware y responde al cliente.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
    
  });



module.exports = server;


