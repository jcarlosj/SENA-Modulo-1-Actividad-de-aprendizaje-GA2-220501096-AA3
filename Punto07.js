function convertirHora( hora ) {
    if ( hora === 0 )
        return "12 am";
    else if ( hora === 12 )
        return "12 pm";
    else if ( hora < 12 )
        return hora + "am";
    else
        return hora - 12 + "pm";
}

// Ejemplo de uso:
let hora24 = 13; // Ejemplo de entrada en notación de 24 horas
let hora12 = convertirHora( hora24 );
console.log("La hora en notación de 12 horas es: " + hora12);
