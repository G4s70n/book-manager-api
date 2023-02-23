const { Router } = require('express')
const router = Router();
const { authorCreator } = require('../controllers/authorsControllers.js') 
const { authorValidator } = require('../validations/authorsValidator.js')



router.post('/', authorValidator, async (req, res, next) => {
    try {
        let { name, last_name, birthday } = req.body;

        const authorCreated = await authorCreator(name, last_name, birthday);

        res.send('Author created succesfully');
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router; 