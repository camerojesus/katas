let aPrimero=[1,2,3,4,5,6,7,8,9]
let aSegundo=[2,4,3,5,4,6,7,9,2]

// Imperativo - hecho por mi
let nProductoEscalar=0;
for(let i=0;i<aPrimero.length;i++) {    
    nProductoEscalar=nProductoEscalar+(aPrimero[i]*aSegundo[i]);
}

console.log(`El producto escalar es ${nProductoEscalar}`)

// Usando reduce - Declarativo - Orientado por la AI
nProductoEscalar=aPrimero.reduce((nProductoEscalar,nNumero,nIndice) => {
    return nProductoEscalar+nNumero*aSegundo[nIndice];
},0)

console.log(`El producto escalar es ${nProductoEscalar}`)