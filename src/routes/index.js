const { Router } = require('express');

// Importar todos los routers:
// Ejemplo: const usersRouter = require('./usersRouter.js');

const booksRouter = require('./booksRouter.js');
const authorsRouter = require('./authorsRouter.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/users', usersRouter);  Manda la request al módulo de usersRouter para ser tratada.


router.use('/books', booksRouter);
router.use('/authors', authorsRouter);



// Ruta "catch-all" maneja las peticiones a URLs que no coinciden con ninguna otra ruta definida en tu aplicación:
router.use('*', function(req, res) {
    res.status(404).send('Página no encontrada');
  });



module.exports = router;