const { Books, Authors } = require('../db.js');



const authorCreator = async (name, last_name, birthday) => {
  try {
    console.log(name, last_name, birthday);

    const author = await Authors.create({
        name,
        last_name,
        birthday
    });

    return author;
  } catch (error) {
    throw new Error(`Error creating actor: ${error.message}`);
  }
};



module.exports = {
  authorCreator
};
