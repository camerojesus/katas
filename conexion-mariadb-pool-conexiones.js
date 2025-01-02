import mariadb from 'mariadb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  connectionLimit: 5,
});

async function CargarRegistros(cNombreTabla, nLimiteRegistros) {
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query(
      `SELECT * FROM ${cNombreTabla} LIMIT ${nLimiteRegistros}`
    );
    console.log("Filas de la tabla:", cNombreTabla);
    console.table(rows);

    // Guardar filas en un archivo
    fs.writeFileSync(`${cNombreTabla}.row`, JSON.stringify(rows, null, 2));
    console.log(`Datos guardados en ${cNombreTabla}.row`);
  } catch (error) {
    console.error("Error al cargar los registros:", error);
  } finally {
    if (connection) await connection.release();
  }
}

// Llamar a la función y cerrar el pool después
(async () => {
  await CargarRegistros("proveedor", 20);
  await pool.end(); // Cierra el pool explícitamente
  console.log("El pool ha sido cerrado. Salida del programa.");
})();
