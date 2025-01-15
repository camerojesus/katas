const cPalabra = process.argv[2] || ''; // Manejo de caso sin argumento
const cVocales = 'aeiou';
let cVocalesEncontradas = '';
let nContadorVocales = 0;

for (const cLetra of cPalabra.toLowerCase()) {
    if (cVocales.includes(cLetra) && !cVocalesEncontradas.includes(cLetra)) {
        nContadorVocales++;
        cVocalesEncontradas += cLetra;
    }
}

console.log(`Hay ${nContadorVocales} vocales únicas en la palabra: ${cPalabra}`);
