const { body, validationResult } = require('express-validator');




// Middleware de validación:
//Si los datos son válidos, el middleware llama a la función next() para pasar al siguiente middleware o al controlador de la ruta. Si hay errores de validación, el middleware devuelve una respuesta HTTP 400 con un objeto que contiene una matriz de errores.
const authorValidator =[
    body('name').isString().isLength({ max: 15, min: 3 }),
    body('last_name').isString().isLength({ max: 15, min: 1 }),
    body('birthday').isISO8601(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
      res.status(400).json({ errors: errors.array() });
    },
] 


  module.exports = {
    authorValidator
  };