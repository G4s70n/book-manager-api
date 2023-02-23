// Importamos las librerías necesarias
require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');



// Obtenemos las credenciales de la base de datos desde el archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;




// Creamos una instancia de Sequelize con las credenciales obtenidas
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});




// Obtenemos el nombre base del archivo actual
const basename = path.basename(__filename);
const modelDefiners = [];



// Leemos los archivos de la carpeta 'models' y agregamos sus definiciones al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, 'models'))
.filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
.forEach((file) => {
modelDefiners.push(require(path.join(__dirname, 'models', file)));
});


  
// Agregamos los modelos al objeto sequelize
modelDefiners.forEach((modelDefiner) => {
    modelDefiner(sequelize);
    });


    

// Obtenemos los modelos y los asociamos
const models = sequelize.models;

const { associateModels } = require('./models/associations/associations.js');
associateModels(models); 
 





// Exportamos los modelos y la instancia de sequelize para poder usarlos en otros archivos
module.exports = {
...sequelize.models,  //para poder importar los modelos así: const { Product, User } = require('./db.js');
conn: sequelize,  //importamos la conexión
};