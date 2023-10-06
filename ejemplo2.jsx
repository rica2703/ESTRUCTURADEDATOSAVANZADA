const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'miappdb'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Consulta para obtener todos los usuarios
connection.query('SELECT * FROM usuarios', (err, results, fields) => {
  if (err) {
    console.error('Error al ejecutar la consulta: ' + err.message);
    return;
  }
  console.log('Resultados de la consulta:');
  console.log(results);

  // Cierra la conexión a la base de datos al finalizar
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión: ' + err.message);
    }
    console.log('Conexión a la base de datos cerrada');
  });
});
