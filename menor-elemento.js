let aVector=[5,6,8,7,9,1,3];

let nMenor=1000000;
for(let i=0;i<aVector.length;i++) {
    if(nMenor>aVector[i]) {
        nMenor=aVector[i];
    }
}

console.log("El menor número es: ",nMenor);

// Usando el operador de propagación
nMenor=Math.min(...aVector);

console.log("Menor elemento, conseguido usando el operador de propagación: ",nMenor);

