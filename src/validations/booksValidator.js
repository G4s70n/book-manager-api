const { body, validationResult } = require('express-validator');




// Middleware de validación:

const bookValidator = [
    body('title').isString().isLength({ max: 80 }),
    body('description').isString().isLength({ max: 1500 }),
    body('publication_date').isISO8601(),
    body('author_id').isInt({ min: 1 }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
      res.status(400).json({ errors: errors.array() });
    },
  ];





  module.exports = {
    bookValidator,
  };