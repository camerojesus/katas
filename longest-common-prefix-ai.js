import clear from "clear";
clear();

let aPalabras = ["internet", "intrior", "interesado", "intento"];

if (aPalabras.length === 0) {
    console.log("Mayor prefijo común: []");
    process.exit(0);
}

if (aPalabras.length === 1) {
    console.log("Mayor prefijo común: ", aPalabras[0]);
    process.exit(0);
}

const nMenosCaracteres = Math.min(...aPalabras.map(palabra => palabra.length));

console.log("Cantidad de caracteres de la palabra más corta: ", nMenosCaracteres);

let cPrefijo = '';
for (let i = 0; i < nMenosCaracteres; i++) {
    const cCaracter = aPalabras[0][i];
    if (aPalabras.every(palabra => palabra[i] === cCaracter)) {
        cPrefijo += cCaracter;
    } else {
        break;
    }
}

console.log("El máximo prefijo común es: ", cPrefijo === '' ? "[]" : cPrefijo);