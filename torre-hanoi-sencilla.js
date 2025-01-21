let pasoActual = 0;

function torresDeHanoi(n, origen, destino, auxiliar) {
    // Aumentamos nuestro contador de llamadas recursivas

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

// Llamada principal: 4 discos, Vara A -> Vara C, con Vara B como auxiliar
torresDeHanoi(4, 'Vara A', 'Vara C', 'Vara B');

