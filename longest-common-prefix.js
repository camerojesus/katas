import clear from "clear";
clear();

let aPalabras=["internet","intrior","interesado","intento"]

if(aPalabras.length===0) {
    console.log("Mayor prefijo comun: []");
}

if(aPalabras.length===1) {
    console.log("Mayor prefijo común: ",aPalabras[0]);
}

let nMenosCaracteres=aPalabras.reduce((nTotalCaracteres,cPalabra) => {
    if(nTotalCaracteres>cPalabra.length) {        
        return cPalabra.length
    }
    else {
        return nTotalCaracteres;
    }
},9999)

console.log("Cantidad de caracteres de la palabra mas corta: ",nMenosCaracteres);

let cPrefijo='';
let cCaracter='';
let bSumarCaracter;
for(let i=0;i<nMenosCaracteres-1;i++) {
    bSumarCaracter=true;
    cCaracter=aPalabras[0][i]
    for(let j=0;j<aPalabras.length;j++) {
        if(aPalabras[j][i]!=cCaracter) {
            bSumarCaracter=false;
        }
    }
    if(bSumarCaracter) cPrefijo=cPrefijo+cCaracter
    else break;
}

console.log("El máximo prefijo común es: ",cPrefijo==='' ? "[]" : cPrefijo);