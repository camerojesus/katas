// Procedimental
let nNumero=64;
let nProducto=1;

while(nProducto<nNumero) {
   nProducto=nProducto*2
}

if(nProducto===nNumero) {
    console.log(nNumero+" es potencia de dos");
} else {
    console.log(nNumero+" no es potencia de dos");
}

// Optimización AI - Usando propiedad matemática de las potencias de dos
if (nNumero > 0 && (nNumero & (nNumero - 1)) === 0) {
    console.log(nNumero + " es potencia de dos - Cálculo optimizado");
} else {
    console.log(nNumero + " no es potencia de dos - Cálculo optimizado");
}