let aVector=[9,3,4,2,7,6,8,9,5,2,4,4,3,9];
let aVectorUnicos=[];

console.log("Array original: ",aVector);

for(let i=0;i<aVector.length;i++) {
    if(!aVectorUnicos.includes(aVector[i])) {
        aVectorUnicos.push(aVector[i]);
    }
}

// aVector=aVectorUnicos;

console.log("Array sin elementos repetidos eliminados: ",aVectorUnicos);

let aVectorUnicos02=new Set(aVector);

console.log("Array sin elementos repetidos eliminados usando Set: ",aVectorUnicos02);
