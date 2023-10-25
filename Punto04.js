function potenciasEnterasDeDos() {
    let exponente = 0;
    let resultado = 1;

    console.log("Potencias de 2 menores o iguales que 100:");
    while (resultado <= 100) {
        console.log("2 elevado a " + exponente + " es " + resultado);
        exponente++;
        resultado = Math.pow(2, exponente);

        if (exponente === 5) {
            break; // Detener el bucle después de las primeras 5 iteraciones para la traza.
        }
    }

}

potenciasEnterasDeDos();