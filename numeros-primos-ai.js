const nDesde = +process.argv[2] || 0; // Valor predeterminado si no se pasa argumento
const nHasta = +process.argv[3] || 0; // Valor predeterminado si no se pasa argumento

for (let i = nDesde; i <= nHasta; i++) {
    if (esPrimo(i)) {
        console.log(`El número ${i} es primo`);
    }
}

// Función para determinar si un número es primo
function esPrimo(numero) {
    if (numero < 2) return false; // Los números menores a 2 no son primos
    const limite = Math.floor(Math.sqrt(numero)); // Calcular la raíz cuadrada una vez
    for (let divisor = 2; divisor <= limite; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}
