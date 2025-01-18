let aVector=[5,6,4,5,8,7,9,2];
let aOrdenado=[...aVector].sort();  // Para crear un nuevo array, dado que la función sort es "mutable"

let nOrigen,nDestino;

console.log("Arreglo original: ",aVector);
console.log("Arreglo ordenado con la función sort: ",aOrdenado);

for(let i=0;i<aVector.length;i++) {    
    for(let j=i+1;j<aVector.length;j++) {
        if(aVector[i]>aVector[j]) {
            nOrigen=aVector[i];
            aVector[i]=aVector[j];
            aVector[j]=nOrigen;
        }
    }
}

console.log("Arreglo ordenadode manera procedimental: ",aVector)
