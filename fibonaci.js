function fibonaci(nNumeros) {
    let i;  
    let nAnterior02;
    let nAnterior01;   
    let nSumatoria=0;
 
    for(i=1;i<=nNumeros;i++) {
       if(i===1) {
         console.log(0);
         nAnterior01=0
       }
       
       if(i===2) {
         console.log(1);
         nAnterior02=nAnterior01
         nAnterior01=1
         }
       
       if(i>=3) {
          nSumatoria=nAnterior01+nAnterior02;   
          console.log(nSumatoria);
          nAnterior02=nAnterior01;
          nAnterior01=nSumatoria
       }      
    }
 }
 
 fibonaci(10);