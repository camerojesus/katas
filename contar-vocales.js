let cPalabra=process.argv[2];
let cVocales='aeiou';
let cVocalesEncontradas='';
let nContadorVocales=0;
let cLetra
for(let i=0;i<cPalabra.length;i++) {
    cLetra=cPalabra[i].toLowerCase();
    if(cVocales.toLowerCase().includes(cLetra) && !cVocalesEncontradas.toLowerCase().includes(cLetra)) {
        nContadorVocales++;
        cVocalesEncontradas=cVocalesEncontradas+cLetra;
    }
}

console.log("Hay "+nContadorVocales+" vocales en la palabra: "+cPalabra);
