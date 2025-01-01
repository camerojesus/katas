import mariadb from 'mariadb';

const config={
    host: '127.0.0.1',
    user: 'root',
    password: 'gmaacc2971',
    database: 'dialca',
    port: 3310
}

async function CargarRegistros(cNombreTabla,nLimiteRegistros) {
    let connection;
    try {
        connection= await mariadb.createConnection(config);
        const row= await connection.query(`select * from ${cNombreTabla}  limit ${nLimiteRegistros} `);
        console.log("Filas de la tabla: ",cNombreTabla);
        console.table(row)

    } catch(error) {
        console.log("Error al cargar los clientes: ",error)
    } finally {
        if(connection) {
            connection.end();
        }
    }
}

CargarRegistros("cliente",20); 
