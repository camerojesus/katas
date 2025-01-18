let aPalabras=["uno", "dos", "tres"];    

aPalabras.forEach((cPalabra,nIndice,aArrayCompleto) => {console.log("Elemento: "+cPalabra+" Indice: "+nIndice+" Array: "+aArrayCompleto)});

for(let cPalabra of aPalabras) {
    console.log("segunda vuelta: ",cPalabra)
}

for(let nIndice in aPalabras) {
    console.log("tercera vuelta: ",aPalabras[nIndice])
}

