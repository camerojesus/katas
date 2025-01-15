// Leer la palabra desde la línea de comandos
let cPalabra = process.argv[2];

// Validar si la palabra es válida
if (!cPalabra) {
  console.log("Por favor, ingresa una palabra como argumento.");
  process.exit(1);
}

// Normalizar la palabra (convertir a minúsculas y eliminar espacios)
cPalabra = cPalabra.toLowerCase().replace(/\s/g, "");

let bPalindromo = true;

// Verificar si es palíndromo
for (let i = 0; i < cPalabra.length / 2; i++) {
  if (cPalabra[i] !== cPalabra[cPalabra.length - 1 - i]) {
    bPalindromo = false;
    break; // Salir del bucle si no es palíndromo
  }
}

// Imprimir el resultado
if (bPalindromo) {
  console.log(`"${process.argv[2]}" es un palíndromo.`);
} else {
  console.log(`"${process.argv[2]}" no es un palíndromo.`);
}
