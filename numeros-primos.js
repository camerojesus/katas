const nDesde=+process.argv[2];
const nHasta=+process.argv[3];
let bPrimo;
for(let i=nDesde;i!=nHasta;i++) {
    bPrimo=true;
    for(let  j=1;j<=i;j++) {
        if(j===1) continue;
        if(j===i) continue;
        if(i%j===0) {
            bPrimo=false;
            break;
        }
    }
    if(bPrimo) {
        console.log("El número "+i+" es primo");
    }    

}


