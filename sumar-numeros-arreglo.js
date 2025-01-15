let aVector=[1,2,3,4,5,6,7,8,9]

let nSuma=0;

for(const nNumero of aVector) {
   nSuma+=nNumero;
}

console.log("Primera suma - el resultado es: ",nSuma)

nSuma=aVector.reduce((nAcumulador,nNumero) => {return nAcumulador+nNumero},0)

console.log("Segunda suma: La suma es : "+nSuma);