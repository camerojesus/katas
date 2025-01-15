
function factorial(numero) {
    console.log("valor de numero actual: "+numero)
    if(numero===1) {     
       return numero    
    } else {    
        return numero*factorial(numero-1);
    }
}

console.log("el factorial es "+factorial(7))