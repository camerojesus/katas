let cCadena='algoritmo',cInverso='',cLetra='';
for(let i=0;i<cCadena.length;i++) {
    cLetra=cCadena.substr(i,1)
    console.log(cLetra);
    cInverso=cLetra+cInverso;
    console.log("cInverso: ",cInverso);
}
