let aVector=["pera","manzana","platano","limón","guayaba"];

console.log("Primera vuelta:")
aVector.forEach((cFruta) => {console.log("la fruta es: ",cFruta)});

console.log("Segunda vuelta: ");

for(let nClave in aVector) {
    console.log("La fruta es: ",aVector[nClave]);
}

console.log("Tercera vuelta:");

for(let cFruta of aVector) {
    console.log("La fruta es: ",cFruta);
}