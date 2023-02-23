const server = require("./src/app");
const { conn } = require("./src/db");


/* server.listen("3001", async () => {
  console.log("Servidor corriendo en puerto 3001");
  await conn.sync({ force: true });
}); */


//La forma de arriba es válida, pero esta forma tiene la ventaja que primero conecta la db y luego inicia el servidor
//lo cual hace que el server no escuche ninguna request hasta tener la base de datos conectada. Es más seguro.
conn.sync( { force: true } ).then(() =>{
  server.listen("3001", () => {
    console.log("Server: servidor corriendo en puerto 3001");
  });
});




// Test de prueba, para comprobar si la conexión funciona:
conn
  .authenticate()
  .then(() => {
    console.log("Data Base: conectado a la base de datos con éxito!");
  })
  .catch((err) => {
    console.error("Data Base: error al conectarse a la base de datos!:", err.message);
  });
