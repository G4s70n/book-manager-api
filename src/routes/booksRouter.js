const { Router } = require('express')
const router = Router();
const { bookCreator, getAllBooks, getBookById, modifyBook, deleteBook } = require('../controllers/booksControllers.js') 
const { bookValidator } = require('../validations/booksValidator.js')



router.post('/', bookValidator, async (req, res, next) => {
    try {
        let { title, description, publication_date, author_id } = req.body;

        const bookCreated = await bookCreator(title, description, publication_date, author_id);

        res.send('Book created succesfully');
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})



router.get('/', async (req, res, next) => {
    try {
        const books = await getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(400).json({ message: error.message })
        
    }
})



router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        const book = await getBookById(id);
        res.send(book)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.put('/:id', bookValidator, async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const {title, description, publication_date, author_id} = req.body;
        const updateBook = await modifyBook(title, description, publication_date, author_id, bookId);
        res.status(200).send('The book has been successfully modified!');
        
    } catch (error) {
        res.status(400).json({ message: error.message })
        
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const bookId = req.params.id;
       await deleteBook(bookId)
        res.status(200).send('The book has been successfully delete!');
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router; 