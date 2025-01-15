
// Solución utilizando estilo imperativo explícito
let cCadena='algoritmo', cInverso='';

for(let i=0;i<cCadena.length;i++) {
  cInverso=cCadena[i]+cInverso;
}

console.log(cInverso); // Salida esperada: "omtirogla"

//  Solución utilizando funciones prototipo: Estilo de Programación Declarativo Abstracto
cInverso=cCadena.split('').reverse().join('')
console.log(cInverso);

