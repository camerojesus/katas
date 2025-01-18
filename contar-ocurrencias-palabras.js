let aPalabras=["este","es","un","vector","que","contiene","varias","palabras","necesito","contar","este","varias","que","que"];
let aPalabrasContadas=[];
let nContador=0;
for(let i=0;i<aPalabras.length;i++) {    
    if(!aPalabrasContadas.includes(aPalabras[i])){
        aPalabrasContadas.push(aPalabras[i]);
        nContador=0;
        for(let j=0;j<aPalabras.length;j++) {
            if(aPalabras[i]===aPalabras[j]) {nContador++}
        }
        console.log("Ocurrencias para "+aPalabras[i]," ",nContador)        
    }
}

// Refactorizado AI
aPalabras = ["este", "es", "un", "vector", "que", "contiene", "varias", "palabras", "necesito", "contar", "este", "varias", "que", "que"];

// Usamos un Map para contar las ocurrencias de cada palabra
let contadorPalabras = new Map();

for (let palabra of aPalabras) {
    // Si la palabra ya está en el Map, incrementamos su contador
    if (contadorPalabras.has(palabra)) {
        contadorPalabras.set(palabra, contadorPalabras.get(palabra) + 1);
    } else {
        // Si no está, la añadimos al Map con un contador de 1
        contadorPalabras.set(palabra, 1);
    }
}

// Mostramos los resultados
for (let [palabra, contador] of contadorPalabras) {
    console.log(`Ocurrencias para "${palabra}": ${contador}`);
}

/* Explicación de la refactorizacion-optimización
        Explicación de las mejoras:
        
        Uso de Map:

        Un Map es una estructura de datos que permite almacenar pares clave-valor. En este caso, la clave es la palabra y el valor es el número de ocurrencias.

        Esto elimina la necesidad de usar un array adicional (aPalabrasContadas) y evita bucles anidados.

        Iteración con for...of:

        El bucle for...of es más limpio y legible para iterar sobre arrays.

        Eficiencia:

        El código original tiene una complejidad de tiempo de O(n²) debido a los bucles anidados. Con el uso de Map, la complejidad se reduce a O(n), ya que las operaciones de Map (como has, get y set) son muy eficientes.

        Mensajes de salida:

        Se utiliza una plantilla de cadena (template literal) para mejorar la legibilidad del mensaje de salida.

        Resultado:
        El código optimizado es más eficiente, legible y fácil de mantener. Además, evita redundancias y mejora el rendimiento, especialmente con arrays grandes.
*/