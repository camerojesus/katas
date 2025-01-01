function operar(a,b,operacion){
    return operacion(a,b);
}

const multiplicar = (a,b) => a*b; // Si no hay llaves se puede omitir el return
const sumar = (a,b) => a+b;

console.log(operar(1,2,multiplicar));
console.log(operar(1,2,sumar));