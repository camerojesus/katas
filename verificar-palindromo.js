let cPalabra=process.argv[2];                       //  recibir la palabra como parámetro

let nApuntadorInverso=cPalabra.length-1;

let bPalindromo=true;

for(let i=0;i<cPalabra.length;i++)
{
    if(cPalabra[i]!=cPalabra[nApuntadorInverso]) {
        bPalindromo=false;
    }
    nApuntadorInverso--;
}

if(bPalindromo) {console.log("Es palíndromo")} 
else {console.log("No es palindromo")}