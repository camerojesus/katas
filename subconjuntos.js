function subconjuntos(arreglo) {
    // Caso base: si el arreglo está vacío, el único subconjunto es el vacío
    if (arreglo.length === 0) {
        return [[]];
    }

    // Tomamos el primer elemento del arreglo
    const primerElemento = arreglo[0];

    // Llamada recursiva para obtener los subconjuntos del resto del arreglo
    const subconjuntosRestantes = subconjuntos(arreglo.slice(1));

    // Para cada subconjunto del resto, creamos dos nuevos subconjuntos:
    // uno que incluye el primer elemento y otro que no lo incluye
    const subconjuntosConPrimerElemento = subconjuntosRestantes.map(sub => [primerElemento, ...sub]);

    // Combinamos los subconjuntos que incluyen el primer elemento con los que no lo incluyen
    return [...subconjuntosRestantes, ...subconjuntosConPrimerElemento];
}

// Ejemplo de uso:
console.clear()
const resultado = subconjuntos([1, 2, 3, 4, 5]);
console.log(resultado);
// Salida esperada:
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// Explicación en el bookmark notion *73B0YS590