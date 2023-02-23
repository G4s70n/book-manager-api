const { Books, Authors } = require('../db.js');



const bookCreator = async (title, description, publication_date, author_id) => {
  try {
    console.log(title, description, publication_date, author_id);

    const book = await Books.create({
      title,
      description,
      publication_date
    });
    if (author_id) {
      const author = await Authors.findByPk(author_id);
      if (author) {
        await book.setAuthor(author);
      }
    }

    return book;
  } catch (error) {
      throw new Error(`Error creating actor: ${error.message}`);
    }
};


//esta ruta solo devolverá información de los libros que tengan un autor asociado en la base de datos. Si hay libros sin autor, no aparecerán en la respuesta.
const getAllBooks = async () => {
    try {
        const books = await Books.findAll({
            // Obtenemos la info 'title' y 'description' de todos los libros del modelo Books.
            attributes: ['title', 'description'],
            // Obtenemos la info 'name' y 'last_name' de los autores asociados.
            include: [{
              model: Authors,
              attributes: ['name', 'last_name']
            }]
          });

          return books;
        } catch (error) {
            throw new Error(`Error getting the books: ${error.message}`);
            
        }
}




const getBookById = async (id) => {
    try {
        const book = await Books.findByPk(id,{
            attributes: ['title', 'description']
        });
        return book;
    } catch (error) {
        throw new Error(`Error getting the book: ${error.message}`);
    }
}



const modifyBook = async (title, description, publication_date, author_id, bookId) => {
    try {
        const book = await Books.findByPk(bookId);
        if (book) {
          const updatedBook = await book.update({
            title,
            description,
            publication_date,
            author_id
          });
          return updatedBook
        } else {
          throw new Error('The book you want to modify does not exist in the db');
        }
      } catch (error) {
        throw new Error(`Error updating book: ${error.message}`);
    }
}


const deleteBook = async (bookId) => {
    try {
        const book = await Books.findByPk(bookId);
        if (book) {
            book.destroy();
        }else {
            throw new Error('The book you want to delete does not exist in the db');
        }
    } catch (error) {
        throw new Error(`Error deleting book: ${error.message}`);
    }
}


module.exports = {
  bookCreator,
  getAllBooks,
  getBookById,
  modifyBook,
  deleteBook
};
