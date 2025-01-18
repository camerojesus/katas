/**
 * Variable global para llevar el conteo de cada movimiento realizado.
 */
let pasoActual = 0;

/**
 * Array global para almacenar el rastro (trazabilidad) de cada llamada recursiva.
 * Cada elemento será un objeto con la forma:
 * {
 *   llamadaId: Number,
 *   n: Number,
 *   origen: String,
 *   destino: String,
 *   auxiliar: String
 * }
 */
const llamadasRecursivas = [];

/**
 * Variable para contar cuántas veces (en qué orden) se invoca la función recursiva.
 */
let contadorLlamadas = 0;

/**
 * Resuelve el problema de las Torres de Hanoi con rastreo detallado.
 * @param {number} n - Número de discos.
 * @param {string} origen - Nombre de la vara de origen.
 * @param {string} destino - Nombre de la vara de destino.
 * @param {string} auxiliar - Nombre de la vara auxiliar.
 */
function torresDeHanoi(n, origen, destino, auxiliar) {
    // Aumentamos nuestro contador de llamadas recursivas
    contadorLlamadas++;

    // Registramos esta llamada y sus parámetros en el array global
    llamadasRecursivas.push({
        llamadaId: contadorLlamadas,
        n: n,
        origen: origen,
        destino: destino,
        auxiliar: auxiliar
    });

    // CASO BASE
    if (n === 1) {
        pasoActual++;
        console.log(`Paso ${pasoActual}: Mover disco 1 de ${origen} a ${destino}`);
    } 
    // CASO RECURSIVO
    else {
        // 1) Mover n-1 discos del origen al auxiliar (usando el destino como apoyo)
        torresDeHanoi(n - 1, origen, auxiliar, destino);

        // 2) Mover el disco n (el más grande) del origen al destino
        pasoActual++;
        console.log(`Paso ${pasoActual}: Mover disco ${n} de ${origen} a ${destino}`);

        // 3) Mover n-1 discos desde el auxiliar al destino (usando el origen como apoyo)
        torresDeHanoi(n - 1, auxiliar, destino, origen);
    }
}

// Reseteamos variables globales antes de la ejecución
pasoActual = 0;
contadorLlamadas = 0;
llamadasRecursivas.length = 0; // vaciamos el array de trazabilidad

// Llamada principal: 4 discos, Vara A -> Vara C, con Vara B como auxiliar
torresDeHanoi(4, 'Vara A', 'Vara C', 'Vara B');

// Al finalizar, mostramos en la consola una tabla con el rastro de las llamadas recursivas
console.log("===== TABLA DE LLAMADAS RECURSIVAS =====");
console.table(llamadasRecursivas);
