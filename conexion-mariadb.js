import mariadb from 'mariadb';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const config={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT)
}

async function CargarRegistros(cNombreTabla,nLimiteRegistros) {
    let connection;
    try {
        connection= await mariadb.createConnection(config);
        const row= await connection.query(`select * from ${cNombreTabla}  limit ${nLimiteRegistros} `);
        console.log("Filas de la tabla: ",cNombreTabla);
        console.table(row);

        // Guardar row en un archivo de texto
        try {
            fs.writeFileSync(`${cNombreTabla}.row`, JSON.stringify(row, null, 2));
            console.log(`Datos guardados en ${cNombreTabla}.row`);
        } catch (writeError) {
            console.log(`Error al guardar los datos en ${cNombreTabla}.row: `, writeError);
        }

    } catch(error) {
        console.log("Error al cargar los clientes: ",error)
    } finally {
        if(connection) {
            connection.end();
        }
    }
}

CargarRegistros("proveedor",20);
