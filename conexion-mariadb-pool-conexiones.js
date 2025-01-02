import mariadb from 'mariadb';
import fs from 'fs';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear un pool de conexiones a la base de datos MariaDB
const pool = mariadb.createPool({
  host: process.env.DB_HOST, // Dirección del host de la base de datos
  user: process.env.DB_USER, // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
  database: process.env.DB_DATABASE, // Nombre de la base de datos
  port: Number(process.env.DB_PORT), // Puerto de conexión a la base de datos
  connectionLimit: 5, // Límite de conexiones simultáneas en el pool
});

// Función asíncrona para cargar registros de una tabla específica
async function CargarRegistros(cNombreTabla, nLimiteRegistros) {
  let connection;
  try {
    // Obtener una conexión del pool
    connection = await pool.getConnection();
    
    // Ejecutar la consulta para obtener los registros
    const rows = await connection.query(
      `SELECT * FROM ${cNombreTabla} LIMIT ${nLimiteRegistros}`
    );
    
    // Mostrar los registros en la consola
    console.log("Filas de la tabla:", cNombreTabla);
    console.table(rows);

    // Guardar los registros en un archivo con formato JSON
    fs.writeFileSync(`${cNombreTabla}.row`, JSON.stringify(rows, null, 2));
    console.log(`Datos guardados en ${cNombreTabla}.row`);
  } catch (error) {
    // Manejo de errores durante la carga de registros
    console.error("Error al cargar los registros:", error);
  } finally {
    // Liberar la conexión de vuelta al pool
    if (connection) await connection.release();
  }
}

// IIFE (Immediately Invoked Function Expression) para ejecutar el script
(async () => {
  // Cargar registros de la tabla 'proveedor' con un límite de 20 registros
  await CargarRegistros("proveedor", 20);
  
  // Cerrar el pool de conexiones explícitamente
  await pool.end();
  console.log("El pool ha sido cerrado. Salida del programa.");
})();
