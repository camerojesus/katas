// Documentación en Notion: *72Q0NN5A4
function imprimirConsola(cMensaje) {
    console.log(cMensaje);
    return function(siguienteMensaje) {
        return imprimirConsola(siguienteMensaje); // Devuelve la misma función
    };
}

imprimirConsola("hola")("como")("estas")("que")("tal")("va")("tu")("dia");
