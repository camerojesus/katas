// Primer algoritmo 
let cCadena='invertir cada palabra de esta cadena';
console.log("Cadena original: ",cCadena);
console.log("Palabras invertidas directamente: ",cCadena.split(' ').reverse().join(" "));
cCadena='invertir cada palabra de esta cadena';
let aCadena=cCadena.split(' ');
let cCadenaInvertida=''
for(let i=0;i<aCadena.length;i++) {
    cCadenaInvertida=aCadena[i]+" "+cCadenaInvertida;
}
console.log(cCadenaInvertida);

// Optimizado por la AI
cCadena='invertir cada palabra de esta cadena';
cCadenaInvertida = cCadena.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
console.log(cCadenaInvertida);

/*
    Explicación:
    split(' '): Divide la cadena en un array de palabras.

    map(): Itera sobre cada palabra del array.

    split(''): Divide cada palabra en un array de caracteres.

    reverse(): Invierte el orden de los caracteres.

    join(''): Une los caracteres invertidos para formar la palabra invertida.

    join(' '): Une todas las palabras invertidas en una sola cadena, separadas por espacios.

    Este enfoque es más conciso y aprovecha las capacidades funcionales de JavaScript para lograr el mismo resultado de manera más eficiente.
*/