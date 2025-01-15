function fibonaci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b]; // uso de desestructuración de arrays -> evita crear variables intermedias
    }
}

fibonaci(10);